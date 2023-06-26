import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


interface ModelViewerProps {
	url: string;
}

function ModelViewer({ url }: ModelViewerProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) {
			return;
		}

		console.log(container?.clientWidth, container.clientHeight);

		// create the scene
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(container?.clientWidth, container.clientHeight);
    if (containerRef.current) {
      // make sure container has no other dom elements
      containerRef.current.innerHTML = "";
			containerRef.current.appendChild(renderer.domElement);
		}

		// load the model
		const loader = new GLTFLoader();
		loader.load(url, (gltf: any) => {
			scene.add(gltf.scene);
		});

		// add lights
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
		scene.add(ambientLight);
		const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
		directionalLight.position.set(0, 1, 0);
		scene.add(directionalLight);

		// set the camera position
		camera.position.z = 5;

		// add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

		// update the renderer size when the window is resized
		const handleResize = () => {
			camera.aspect = container.clientWidth / container.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(container.clientWidth, container.clientHeight);
		};
		window.addEventListener("resize", handleResize);

		// render the scene
		const animate = () => {
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
		};
		animate();

		// clean up
		return () => {
			scene.remove();
			renderer.dispose();
			window.removeEventListener("resize", handleResize);
		};
	}, [url]);

	return (
		<div
			ref={containerRef}
			style={{
				height: "100%",
				width: "100%",
			}}
		/>
	);
}

export default ModelViewer;
