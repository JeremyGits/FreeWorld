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
- ✅ [hal.dll](pages/hal.html) - Hardware Abstraction Layer
- ✅ [Memory Management](pages/memory.html) - Memory subsystem
- ✅ [Process Management](pages/process.html) - Process and thread management
- ✅ [I/O Infrastructure](pages/io-infrastructure.html) - I/O subsystem
- ✅ [Device Drivers](pages/drivers.html) - Device driver framework
- ✅ [File System (Kernel)](pages/filesystem-kernel.html) - Kernel filesystem
- ✅ [System Calls](pages/syscalls.html) - System call reference

### Services
- ✅ [smss.exe](pages/smss.html) - Session Manager Subsystem (Fully Implemented)
- ✅ [csrss.exe](pages/csrss.html) - Client Server Runtime Subsystem (Fully Implemented)
- ✅ [freeworldlogon.exe](pages/freeworldlogon.html) - Login Manager
- ✅ [logd](pages/logd.html) - Logging Daemon (Fully Implemented with IPC)
- ✅ [networkd](pages/networkd.html) - Network Daemon (Core Implementation)
- ✅ [securityd](pages/securityd.html) - Security Daemon (Node.js modules, daemon planned)
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
- ✅ **Kernel IPC System** (`kernel/ipc/ipc.asm`) - Core IPC for all services
  - Unix domain sockets, named pipes, message queues
  - Channel management, message passing
  - Used by logd, csrss, networkd, and all services
- ✅ **logd IPC Integration** - Unix domain socket (`/var/run/logd.sock`)
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
- ✅ [Architecture](pages/architecture.html) - System architecture overview
- ✅ [Variables & Constants](pages/variables.html) - All variables and constants

## Implementation Status

### ✅ Fully Implemented & Documented
- **Boot Components**: BOOTMGR, BCD, freeload.exe
- **Core System**: Kernel, HAL, Memory, Process, I/O, Drivers
- **Services**: smss.exe, csrss.exe, logd, networkd (core)
- **Native Rendering Engine**: All 5 phases complete (~2,500 lines)
- **Kernel Resource Manager**: Complete (~1,000 lines)
- **IPC System**: Core IPC with Unix domain sockets
- **Event System**: EventBus and EventManager integrated
- **logd Integration**: IPC + EventBus audit logging

### ⚠️ Partially Implemented
- **networkd**: Core complete, DHCP client and routing need full implementation
- **securityd**: Node.js modules complete, daemon implementation planned
- **Ethernet Driver**: Structure complete, needs hardware-specific code
- **TCP/IP Stack**: Foundation exists, needs full implementation

### ⏳ Structural Implementation Only
- **GUI Subsystems**: Class definitions, method signatures, basic logic
- **System Services**: Registry, Object Manager, Path Parser, etc.
- These provide structure but not yet production-ready functionality

## Recent Additions

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

- **Boot Components**: 100% documented
- **Core System**: 100% documented
- **Services**: 100% documented (including new daemons)
- **Rendering System**: 100% documented
- **IPC System**: Documented in service pages
- **User Interface**: 100% documented
- **GUI Subsystems**: ~60% documented (many pages created)
- **System Services**: ~30% documented (some pages created)
- **Node.js System**: 100% documented
- **Reference**: 100% documented

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

## Next Steps

1. Complete remaining GUI subsystem documentation pages
2. Complete System Services documentation pages
3. Add IPC system documentation page
4. Update all pages with latest implementation status
5. Add integration examples for IPC usage
6. Document network stack implementation (when complete)
