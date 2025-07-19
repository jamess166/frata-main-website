"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import * as OBC from "@thatopen/components"

export function IfcViewer() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return

    const container = containerRef.current

    const components = new OBC.Components()

    const worlds = components.get(OBC.Worlds)
    const world = worlds.create<
      OBC.SimpleScene,
      OBC.SimpleCamera,
      OBC.SimpleRenderer
    >()

    world.scene = new OBC.SimpleScene(components)
    world.renderer = new OBC.SimpleRenderer(components, container)
    world.camera = new OBC.SimpleCamera(components)

    components.init()

    world.scene.setup()
    world.scene.three.background = null

    const fragments = components.get(OBC.FragmentsManager)
    
    async function setupFragments() {
        try {
            const githubUrl = "https://thatopen.github.io/engine_fragment/resources/worker.mjs";
            const fetchedUrl = await fetch(githubUrl);
            const workerBlob = await fetchedUrl.blob();
            const workerFile = new File([workerBlob], "worker.mjs", { type: "text/javascript" });
            const workerUrl = URL.createObjectURL(workerFile);
            fragments.init(workerUrl);

            world.camera.controls.addEventListener("rest", () => fragments.core.update(true));

            fragments.list.onItemSet.add(({ value: model }) => {
                model.useCamera(world.camera.three);
                world.scene.three.add(model.object);
                fragments.core.update(true);
            });

            const fragPaths = ["https://thatopen.github.io/engine_components/resources/frags/school_arq.frag"];
            await Promise.all(
                fragPaths.map(async (path) => {
                    const modelId = path.split("/").pop()?.split(".").shift();
                    if (!modelId) return null;
                    const file = await fetch(path);
                    const buffer = await file.arrayBuffer();
                    return fragments.core.load(buffer, { modelId });
                }),
            );

            await world.camera.controls.setLookAt(68, 23, -8.5, 21.5, -5.5, 23);
            await fragments.core.update(true);

        } catch (error) {
            console.error("Error setting up fragments:", error);
        }
    }
    
    setupFragments();

    return () => {
      components.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
    >
    </div>
  )
}
