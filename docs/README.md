# FreeWorld OS Documentation

Complete technical documentation for the FreeWorld Operating System.

## Structure

- **index.html** - Main documentation homepage with navigation
- **pages/** - Individual documentation pages for each component
- **styles.css** - Documentation styling
- **navigation.js** - Navigation functionality

## Complete Documentation Index

### Boot Components
- ✅ [BOOTMGR](pages/bootmgr.html) - Boot Manager
- ✅ [BCD](pages/bcd.html) - Boot Configuration Data
- ✅ [freeload.exe](pages/freeload.html) - OS Loader
- ✅ [Boot Process](pages/boot-process.html) - Complete boot sequence
- ✅ [Boot Analysis](pages/boot-analysis.html) - Boot component analysis

### Core System
- ✅ [fwoskrnl.exe](pages/kernel.html) - Kernel Executive
- ✅ [hal.dll](pages/hal.html) - Hardware Abstraction Layer (Fully Implemented)
- ✅ [Memory Management](pages/memory.html) - Memory subsystem
- ✅ [Process Management](pages/process.html) - Process and thread management
- ✅ [I/O Infrastructure](pages/io-infrastructure.html) - I/O subsystem
- ✅ [Device Drivers](pages/drivers.html) - Device driver framework
- ✅ [File System (Kernel)](pages/filesystem-kernel.html) - FAT32 filesystem and ATA driver (Fully Implemented)
- ✅ [ELF Loader](pages/elf-loader.html) - ELF executable loader (32-bit and 64-bit support)
- ✅ [execve() System Call](pages/execve.html) - Process execution and program loading
- ✅ [System Calls](pages/syscalls.html) - System call reference
- ✅ [IPC System](pages/ipc-system.html) - Inter-process communication
- ✅ [Minimal C Library](pages/minimal-libc.html) - Essential C runtime library
- ✅ [Build System](pages/build-system.html) - Cross-compilation toolchain and build infrastructure

### Networking Stack
- ✅ **TCP/IP Stack** - Complete implementation
  - ✅ [IP Layer](pages/network-ip.html) - IP packet routing, checksums, fragmentation support
  - ✅ [TCP Layer](pages/network-tcp.html) - Full TCP state machine, connection management, flow control
  - ✅ [UDP Layer](pages/network-udp.html) - UDP socket management, datagram handling
  - ✅ [ICMP Layer](pages/network-icmp.html) - ICMP echo (ping), error messages
  - ✅ [Port Manager](pages/network-port-manager.html) - Centralized port binding and management
- ✅ **Ethernet Drivers** - Complete hardware support
  - ✅ [Ethernet Driver](pages/ethernet-driver.html) - Frame construction, routing, validation
  - ✅ [RTL8139 Driver](pages/ethernet-rtl8139.html) - RTL8139 TX/RX buffer management
  - ✅ [E1000 Driver](pages/ethernet-e1000.html) - E1000 TX/RX descriptor rings
  - ✅ [VirtIO Driver](pages/ethernet-virtio.html) - VirtIO queue management

### Services
- ✅ [smss.exe](pages/smss.html) - Session Manager Subsystem (Fully Implemented)
- ✅ [csrss.exe](pages/csrss.html) - Client Server Runtime Subsystem (Fully Implemented)
- ✅ [freeworldlogon.exe](pages/freeworldlogon.html) - Login Manager
- ✅ [logd](pages/logd.html) - Logging Daemon (Fully Implemented with IPC)
- ✅ [networkd](pages/networkd.html) - Network Daemon (Fully Implemented: DHCP, Routing, IPC)
- ✅ [securityd](pages/securityd.html) - Security Daemon (Fully Implemented: User/Group Management, IPC)
- ✅ [display-manager](pages/display-manager.html) - Graphical login and session management

### User Interface
- ✅ [Shell](pages/shell.html) - Command-line Shell
- ✅ [Wanderer](pages/wanderer.html) - File Manager
- ✅ [FWMIC](pages/fwmic.html) - FreeWorld Management Instrumentation and Control

### GUI Subsystems
- ✅ [Device Context](pages/dc.html) - Virtual canvas for drawing
- ✅ [Compositor](pages/compositor.html) - Off-screen buffer merging
- ✅ [GUI Resource Manager](pages/resources.html) - Global resource registry (fonts, icons, cursors)
- ✅ [Kernel Resource Manager](pages/resource-manager.html) - CPU, memory, I/O resource management
- ✅ [Event System](pages/event-system.html) - EventBus for component communication
- ✅ [Input Manager](pages/input-manager.html) - Centralized mouse/keyboard input
- ✅ [Clipboard & Drag & Drop](pages/clipboard.html) - Inter-process communication
- ✅ [Window Relationships](pages/window-relationships.html) - Parent/child, clipping
- ✅ [Menu System](pages/menu.html) - Menus and accelerators
- ✅ [Non-Client Area](pages/nonclient.html) - Window frames and borders
- ✅ [Standard Controls](pages/controls.html) - BUTTON, EDIT, STATIC
- ✅ [Windowing Architecture](pages/windowing-architecture.html) - Window system architecture
- ✅ [GUI Kernel System](pages/gui-kernel.html) - Kernel-level GUI
- ✅ [Window Management](pages/window.html) - Window API

### Rendering System
- ✅ [Native Rendering Engine](pages/rendering-engine.html) - Hybrid rendering engine (All 5 Phases Complete)
  - Phase 1: Core Rendering (ASM) - Primitives, blitting, clipping
  - Phase 2: Rendering Engine (C) - Compositing, blend modes, double buffering
  - Phase 3: Font System (C) - Font loading and text rendering
  - Phase 4: Image System (C) - BMP/ICO support, scaling, caching
  - Phase 5: Layout Engine (C) - 7 layout algorithms, alignment, spacing
- ⏳ [ASM Browser Engine (Legacy)](pages/browser-engine.html) - Original pure ASM concept (superseded)

### System Services
- ✅ [Graphics System](pages/graphics.html) - Graphics subsystem
- ⏳ [Object Manager](pages/object-manager.html) - Handle management, file operations
- ⏳ [Path Parser](pages/path.html) - Virtual drives, path resolution
- ⏳ [Registry](pages/registry.html) - Hive management, key/value operations
- ⏳ [File System Watcher](pages/filesystem-watcher.html) - Directory change notifications
- ⏳ [Security Manager](pages/security.html) - Sessions, tokens, ACLs
- ⏳ [Error Manager](pages/error.html) - GetLastError, OutputDebugString
- ⏳ [Shell Ecosystem](pages/shell-ecosystem.html) - Desktop, Taskbar, ShellExecute

### IPC & Communication
- ✅ [IPC System](pages/ipc-system.html) - Core IPC for all services
  - **Kernel IPC System** (`kernel/ipc/ipc.asm`) - Core IPC infrastructure
  - Unix domain sockets, named pipes, message queues
  - Channel management, message passing
  - Used by logd, csrss, networkd, and all services
- ✅ **logd IPC Integration** - Unix domain socket (`/var/run/logd.sock`)
- ✅ **networkd IPC Integration** - Unix domain socket (`/var/run/networkd.sock`)
- ✅ **csrss IPC Integration** - Unix domain socket (`/var/run/csrss.sock`)
- ✅ **EventBus Integration** - logd subscribes to EventBus for audit logging

### Node.js System
- ✅ [Window API](pages/window.html) - Window Management API
- ✅ [Desktop](pages/desktop.html) - Desktop Environment
- ✅ [System API](pages/api.html) - System-level APIs
- ✅ [Filesystem API](pages/filesystem.html) - Cross-platform file operations
- ✅ [System Integration](pages/integration.html) - FreeWorldSystem class
- ✅ [Window Manager Client](pages/wm-client.html) - Window manager client library

### File Management
- ✅ [File Type Associations](pages/file-type-associations.html) - File type registry
- ✅ [Icon System](pages/icon-system.html) - Icon management and serving

### Reference
- ✅ [Naming Conventions](pages/naming-conventions.html) - Standard naming conventions
- ✅ [Boot Process](pages/boot-process.html) - Complete boot sequence
- ✅ [Boot Analysis](pages/boot-analysis.html) - Boot component analysis
- ✅ [Architecture](pages/architecture.html) - System architecture overview
- ✅ [System Calls](pages/syscalls.html) - System call reference
- ✅ [Variables & Constants](pages/variables.html) - All variables and constants

## Implementation Status

### ✅ Fully Implemented & Documented
- **Boot Components**: BOOTMGR, BCD, freeload.exe
- **Core System**: Kernel, HAL, Memory, Process, I/O, Drivers
- **Filesystem**: FAT32 parser and ATA disk driver (fully functional)
- **ELF Loader**: 32-bit and 64-bit ELF executable loading
- **Process Execution**: execve() system call for program spawning
- **C Runtime**: Minimal C library for basic program execution
- **Build System**: Cross-compilation toolchain and kernel headers
- **Services**: smss.exe, csrss.exe, logd, networkd (core + IPC)
- **Native Rendering Engine**: All 5 phases complete (~2,500 lines)
- **Kernel Resource Manager**: Complete (~1,000 lines) + System calls
- **IPC System**: Core IPC with Unix domain sockets (all services integrated)
- **Event System**: EventBus and EventManager integrated
- **logd Integration**: IPC + EventBus audit logging
- **networkd Integration**: IPC for runtime configuration

### ⚠️ Partially Implemented
- **GUI Subsystems**: Some components fully implemented, others structural only
- **System Services**: Registry, Object Manager, Path Parser need full implementation

### ⏳ Structural Implementation Only
- **GUI Subsystems**: Class definitions, method signatures, basic logic
- **System Services**: Registry, Object Manager, Path Parser, etc.
- These provide structure but not yet production-ready functionality

## Recent Additions

### Filesystem & Program Execution
- **FAT32 Filesystem**: Complete FAT32 parser with directory traversal and file reading
- **ATA Driver**: 32-bit ATA/IDE disk driver for sector reading
- **ELF Loader**: Full ELF executable loader supporting 32-bit and 64-bit programs
- **execve()**: System call for loading and executing programs
- **Minimal C Library**: Essential C runtime (~500 lines) for basic program execution
- **Build System**: Cross-compilation toolchain setup and kernel headers

### IPC System (Core-Level)
- **Location**: `kernel/ipc/ipc.asm`, `kernel/ipc/ipc.h`
- **Purpose**: Core IPC for all services and daemons
- **Features**: Channels, message queues, Unix domain sockets, named pipes
- **Integration**: Used by logd, csrss, networkd, and all system services

### logd (Logging Daemon)
- **Status**: ✅ Fully Implemented
- **IPC**: Unix domain socket (`/var/run/logd.sock`)
- **Integration**: EventManager/EventBus for audit logging
- **Features**: Log rotation, level filtering, structured logging

### smss (Session Manager)
- **Status**: ✅ Fully Implemented
- **Features**: Process management, auto-restart, monitoring
- **Starts**: csrss, freeworldlogon, logd, networkd, securityd

### csrss (Client/Server Runtime)
- **Status**: ✅ Fully Implemented
- **IPC**: Unix domain socket (`/var/run/csrss.sock`)
- **Features**: Console management, window management, message loop

### Native Rendering Engine
- **Status**: ✅ All 5 Phases Complete
- **Total**: ~2,500 lines of production code
- **Architecture**: Hybrid (ASM + C + Node.js)

### Kernel Resource Manager
- **Status**: ✅ Complete
- **Total**: ~1,000 lines of production code
- **Features**: CPU, memory, I/O, FD management with heuristics

## Documentation Coverage

- **Boot Components**: 100% documented (5 pages)
- **Core System**: 100% documented (13 pages including filesystem, ELF loader, execve, minimal libc, build system)
- **Services**: 100% documented (including new daemons)
- **Rendering System**: 100% documented
- **IPC System**: Documented in service pages
- **User Interface**: 100% documented
- **GUI Subsystems**: ~60% documented (many pages created)
- **System Services**: ~30% documented (some pages created)
- **Node.js System**: 100% documented
- **Reference**: 100% documented

### New Documentation Pages (Latest Update)
- ✅ **filesystem-kernel.html** - FAT32 filesystem parser and ATA disk driver
- ✅ **elf-loader.html** - ELF executable loader (32-bit and 64-bit)
- ✅ **execve.html** - execve() system call for program execution
- ✅ **minimal-libc.html** - Minimal C library documentation
- ✅ **build-system.html** - Build system and cross-compilation toolchain

## Viewing

Open `index.html` in a web browser to view the documentation. The navigation sidebar provides quick access to all pages.

## Features

- Complete component documentation
- Code examples and usage
- Data structure references
- Function and API documentation
- Cross-referenced navigation
- Responsive design
- Implementation status notes
- Architecture diagrams and explanations

## Key Integrations

### Event System Integration
- **EventBus**: Central event system for all components
- **EventManager**: Comprehensive event logging and auditing
- **logd Integration**: Automatically logs security/system/error events
- **InputManager**: Emits standardized input events to EventBus
- **DragDropSystem**: Uses EventBus for decoupled communication

### IPC Integration
- **logd**: Receives logs via Unix domain socket
- **csrss**: Provides console/window services via IPC
- **networkd**: Can use IPC for configuration (structure ready)
- **All Services**: Can use kernel IPC system for communication

### Resource Management
- **Kernel Resource Manager**: CPU, memory, I/O, FD management
- **GUI Resource Manager**: Fonts, icons, cursors, brushes
- **Both**: Fully documented and implemented

## Documentation Structure

The documentation is organized into HTML pages with:
- **Navigation sidebar** on every page for easy access
- **Status badges** indicating implementation status
- **Code examples** and usage patterns
- **Architecture diagrams** and data flow explanations
- **Integration points** showing how components work together
- **Related documentation** links for cross-referencing

## Key Features

### Complete Component Documentation
Every major component has:
- Overview and purpose
- Implementation details
- API reference
- Usage examples
- Integration information
- Build instructions

### Implementation Status Tracking
- ✅ Fully Implemented - Production-ready code
- ⚠️ Partially Implemented - Core complete, needs extension
- ⏳ Structural Only - Framework exists, needs implementation

### Cross-Referenced Navigation
- All pages link to related components
- Navigation sidebar on every page
- Index page provides complete overview

## Next Steps

1. Complete remaining GUI subsystem documentation pages
2. Complete System Services documentation pages
3. Add IPC system documentation page
4. Update all pages with latest implementation status
5. Add integration examples for IPC usage
6. Document network stack implementation (when complete)
7. Add more code examples and usage patterns
8. Create troubleshooting guides for common issues
