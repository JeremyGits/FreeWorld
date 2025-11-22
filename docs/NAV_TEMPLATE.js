// Navigation template for all documentation pages
// This is a reference for the standard navigation structure

const NAV_TEMPLATE = `
            <nav class="sidebar">
                <h2>Navigation</h2>
                <ul class="nav-menu">
                    <li><a href="../index.html">Home</a></li>
                    <li class="nav-section">Boot Components</li>
                    <li><a href="bootmgr.html">BOOTMGR</a></li>
                    <li><a href="bcd.html">BCD</a></li>
                    <li><a href="freeload.html">freeload.exe</a></li>
                    <li class="nav-section">Core System</li>
                    <li><a href="kernel.html">fwoskrnl.exe</a></li>
                    <li><a href="hal.html">hal.dll</a></li>
                    <li class="nav-section">Services</li>
                    <li><a href="smss.html">smss.exe</a></li>
                    <li><a href="csrss.html">csrss.exe</a></li>
                    <li><a href="freeworldlogon.html">freeworldlogon.exe</a></li>
                    <li class="nav-section">User Interface</li>
                    <li><a href="shell.html">Shell</a></li>
                    <li><a href="wanderer.html">Wanderer</a></li>
                    <li class="nav-section">GUI Subsystems</li>
                    <li><a href="dc.html">Device Context</a></li>
                    <li><a href="compositor.html">Compositor</a></li>
                    <li><a href="resources.html">Resource Manager</a></li>
                    <li><a href="input.html">Input Manager</a></li>
                    <li><a href="clipboard.html">Clipboard & Drag & Drop</a></li>
                    <li><a href="window-relationships.html">Window Relationships</a></li>
                    <li><a href="menu.html">Menu System</a></li>
                    <li><a href="nonclient.html">Non-Client Area</a></li>
                    <li><a href="controls.html">Standard Controls</a></li>
                    <li><a href="timer.html">Timer Manager</a></li>
                    <li><a href="property.html">Property Manager</a></li>
                    <li><a href="hooks.html">Hook Manager</a></li>
                    <li><a href="focus.html">Focus Manager</a></li>
                    <li class="nav-section">System Services</li>
                    <li><a href="object-manager.html">Object Manager</a></li>
                    <li><a href="path.html">Path Parser</a></li>
                    <li><a href="registry.html">Registry</a></li>
                    <li><a href="filesystem-watcher.html">File System Watcher</a></li>
                    <li><a href="security.html">Security Manager</a></li>
                    <li><a href="error.html">Error Manager</a></li>
                    <li><a href="shell-ecosystem.html">Shell Ecosystem</a></li>
                    <li class="nav-section">Node.js System</li>
                    <li><a href="window.html">Window API</a></li>
                    <li><a href="desktop.html">Desktop</a></li>
                    <li><a href="api.html">System API</a></li>
                    <li><a href="filesystem.html">Filesystem API</a></li>
                    <li><a href="integration.html">System Integration</a></li>
                    <li class="nav-section">Reference</li>
                    <li><a href="naming-conventions.html">Naming Conventions</a></li>
                    <li><a href="boot-process.html">Boot Process</a></li>
                    <li><a href="architecture.html">Architecture</a></li>
                    <li><a href="syscalls.html">System Calls</a></li>
                    <li><a href="variables.html">Variables & Constants</a></li>
                </ul>
            </nav>`;

module.exports = NAV_TEMPLATE;

