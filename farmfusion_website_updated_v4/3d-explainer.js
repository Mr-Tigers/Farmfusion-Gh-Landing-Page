// Enhanced 3D animation for the hero section
document.addEventListener('DOMContentLoaded', function() {
    // Create a more advanced 3D animation for the explainer
    if (typeof THREE !== 'undefined') {
        const container = document.getElementById('3d-animation-container');
        if (container) {
            // Set up scene
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            container.appendChild(renderer.domElement);

            // Create a farm-themed 3D model
            // Main earth/globe representing the marketplace
            const globeGeometry = new THREE.SphereGeometry(3, 64, 64);
            const globeMaterial = new THREE.MeshBasicMaterial({ 
                color: 0x4CAF50,
                wireframe: true,
                transparent: true,
                opacity: 0.7
            });
            const globe = new THREE.Mesh(globeGeometry, globeMaterial);
            scene.add(globe);

            // Add outer glow sphere
            const glowGeometry = new THREE.SphereGeometry(3.2, 32, 32);
            const glowMaterial = new THREE.MeshBasicMaterial({ 
                color: 0x4CAF50,
                transparent: true,
                opacity: 0.1,
                side: THREE.BackSide
            });
            const glow = new THREE.Mesh(glowGeometry, glowMaterial);
            scene.add(glow);

            // Create farm plots on the globe (small cubes representing farm areas)
            const farmGroup = new THREE.Group();
            for (let i = 0; i < 20; i++) {
                // Create random positions on the sphere
                const phi = Math.acos(-1 + (2 * Math.random()));
                const theta = 2 * Math.PI * Math.random();
                
                const x = 3 * Math.sin(phi) * Math.cos(theta);
                const y = 3 * Math.sin(phi) * Math.sin(theta);
                const z = 3 * Math.cos(phi);
                
                // Create a small cube to represent a farm
                const farmGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.1);
                const farmMaterial = new THREE.MeshBasicMaterial({ 
                    color: 0x000000,
                    transparent: true,
                    opacity: 0.8
                });
                const farm = new THREE.Mesh(farmGeometry, farmMaterial);
                
                // Position the farm on the globe surface
                farm.position.set(x, y, z);
                
                // Orient the farm to face outward from the center
                farm.lookAt(0, 0, 0);
                farm.rotateX(Math.PI / 2); // Rotate to lie flat on the surface
                
                farmGroup.add(farm);
            }
            scene.add(farmGroup);

            // Create connection lines between farms (representing the marketplace connections)
            const connectionGroup = new THREE.Group();
            const lineMaterial = new THREE.LineBasicMaterial({ 
                color: 0x4CAF50,
                transparent: true,
                opacity: 0.4
            });
            
            // Connect some random farms
            for (let i = 0; i < 15; i++) {
                const farm1 = farmGroup.children[Math.floor(Math.random() * farmGroup.children.length)];
                const farm2 = farmGroup.children[Math.floor(Math.random() * farmGroup.children.length)];
                
                if (farm1 !== farm2) {
                    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
                        farm1.position.clone().multiplyScalar(1.05), // Slightly above surface
                        farm2.position.clone().multiplyScalar(1.05)
                    ]);
                    const line = new THREE.Line(lineGeometry, lineMaterial);
                    connectionGroup.add(line);
                }
            }
            scene.add(connectionGroup);

            // Add some floating icons representing farm products and retail
            const iconGroup = new THREE.Group();
            const iconGeometries = [
                new THREE.SphereGeometry(0.2, 16, 16), // Fruit
                new THREE.ConeGeometry(0.2, 0.4, 16),  // Carrot
                new THREE.BoxGeometry(0.3, 0.3, 0.3)   // Package
            ];
            
            for (let i = 0; i < 15; i++) {
                const iconGeometry = iconGeometries[Math.floor(Math.random() * iconGeometries.length)];
                const iconMaterial = new THREE.MeshBasicMaterial({ 
                    color: i % 2 === 0 ? 0x4CAF50 : 0x000000,
                    transparent: true,
                    opacity: 0.8
                });
                const icon = new THREE.Mesh(iconGeometry, iconMaterial);
                
                // Position randomly around the globe
                const distance = 4 + Math.random() * 2;
                const phi = Math.acos(-1 + (2 * Math.random()));
                const theta = 2 * Math.PI * Math.random();
                
                icon.position.x = distance * Math.sin(phi) * Math.cos(theta);
                icon.position.y = distance * Math.sin(phi) * Math.sin(theta);
                icon.position.z = distance * Math.cos(phi);
                
                // Add to group
                iconGroup.add(icon);
            }
            scene.add(iconGroup);

            // Position camera
            camera.position.z = 8;

            // Animation variables
            let rotationSpeed = 0.005;
            let iconMovementAmplitude = 0.05;
            let time = 0;

            // Animation loop
            function animate() {
                requestAnimationFrame(animate);
                time += 0.01;
                
                // Rotate the globe
                globe.rotation.y += rotationSpeed;
                glow.rotation.y += rotationSpeed * 0.7;
                farmGroup.rotation.y += rotationSpeed;
                connectionGroup.rotation.y += rotationSpeed;
                
                // Pulse the glow
                const pulseScale = 1 + 0.05 * Math.sin(time);
                glow.scale.set(pulseScale, pulseScale, pulseScale);
                
                // Move the icons in a floating pattern
                iconGroup.children.forEach((icon, index) => {
                    icon.position.y += Math.sin(time + index * 0.5) * iconMovementAmplitude;
                    icon.rotation.y += 0.01;
                    icon.rotation.x += 0.005;
                });
                
                renderer.render(scene, camera);
            }
            
            animate();

            // Handle window resize
            window.addEventListener('resize', function() {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            });

            // Interactive elements - rotate faster on hover
            container.addEventListener('mouseenter', function() {
                rotationSpeed = 0.01;
                iconMovementAmplitude = 0.1;
            });
            
            container.addEventListener('mouseleave', function() {
                rotationSpeed = 0.005;
                iconMovementAmplitude = 0.05;
            });
        }
    }
});
