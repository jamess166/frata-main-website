"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import * as OBC from "@thatopen/components"
import { FolderOpen } from "lucide-react"

export function IfcViewer() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return

    const components = new OBC.Components()
    
    const worlds = components.get(OBC.Worlds)
    const world = worlds.create<
      OBC.SimpleScene,
      OBC.SimpleCamera,
      OBC.SimpleRenderer
    >()
    world.scene = new OBC.SimpleScene(components)
    world.renderer = new OBC.SimpleRenderer(components, containerRef.current)
    world.camera = new OBC.SimpleCamera(components)
    
    components.init()

    world.camera.controls.setLookAt(10, 10, 10, 0, 0, 0)
    world.scene.setup()

    const grids = components.get(OBC.Grids)
    grids.create(world)

    const fragments = components.get(OBC.FragmentsManager)
    const ifcLoader = components.get(OBC.IfcLoader)
    
    async function loadSampleIfc() {
      try {
        const response = await fetch('/sample.ifc');
        if (!response.ok) {
          throw new Error('Failed to fetch sample IFC file.');
        }
        const blob = await response.blob();
        const file = new File([blob], 'sample.ifc');
        const buffer = await file.arrayBuffer();
        const model = await ifcLoader.load(new Uint8Array(buffer));
        world.scene.three.add(model);
      } catch (error) {
        console.error("Could not load sample IFC:", error)
      }
    }

    loadSampleIfc();

    const mainToolbar = new OBC.Toolbar(components, {
      name: "Main Toolbar",
      position: "bottom",
    })
    components.ui.addToolbar(mainToolbar)
    
    const loadButton = new OBC.Button(components)
    loadButton.materialIcon = "folder_open"
    loadButton.tooltip = "Load IFC"
    mainToolbar.addChild(loadButton)

    const handleFileLoad = async (event: Event) => {
      const input = event.target as HTMLInputElement
      if (input.files && input.files[0]) {
        const file = input.files[0]
        const data = await file.arrayBuffer()
        const buffer = new Uint8Array(data)
        const model = await ifcLoader.load(buffer)
        world.scene.three.add(model)
      }
    }
    
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.ifc';
    fileInput.style.display = 'none';
    fileInput.addEventListener('change', handleFileLoad);
    
    loadButton.onClick.add(() => fileInput.click())


    return () => {
      components.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
    ></div>
  )
}
