# FreeWorld OS - Complete Subsystem Documentation Index

This document provides a complete index of all subsystems and their documentation pages.

## GUI Subsystems

### Rendering
- **[Device Context (DC)](pages/dc.html)** - Virtual canvas for drawing operations
- **[Compositor](pages/compositor.html)** - Merges off-screen buffers with transparency and shadows

### Resource Management
- **[Resource Manager](pages/resources.html)** - Global resource registry (fonts, icons, cursors, brushes, pens)

### Input
- **[Input Manager](pages/input.html)** - Keyboard focus, mouse capture, modifiers, hit testing

### Inter-Process Communication
- **[Clipboard & Drag & Drop](pages/clipboard.html)** - Data exchange between applications

### Window Management
- **[Window Relationships](pages/window-relationships.html)** - Parent/child linking, clipping, modal loops
- **[Non-Client Area](pages/nonclient.html)** - Window frames, title bars, resize borders
- **[Focus Manager](pages/focus.html)** - Window activation and control focus

### Controls
- **[Standard Controls](pages/controls.html)** - BUTTON, EDIT, STATIC controls
- **[Menu System](pages/menu.html)** - Menus, accelerators, menu loops

### System Services
- **[Timer Manager](pages/timer.html)** - SetTimer/KillTimer, WM_TIMER messages
- **[Property Manager](pages/property.html)** - SetProp/GetProp, atom table
- **[Hook Manager](pages/hooks.html)** - SetWindowsHookEx, system interception

## System Services

### File & Object Management
- **[Object Manager](pages/object-manager.html)** - Handle management, file operations
- **[Path Parser](pages/path.html)** - Virtual drives, relative paths
- **[Registry](pages/registry.html)** - Hive management, key/value operations
- **[File System Watcher](pages/filesystem-watcher.html)** - Directory change notifications

### Security & Error Handling
- **[Security Manager](pages/security.html)** - Sessions, tokens, ACLs, permissions
- **[Error Manager](pages/error.html)** - GetLastError, OutputDebugString

### Shell
- **[Shell Ecosystem](pages/shell-ecosystem.html)** - Desktop, Taskbar, ShellExecute

## Integration

- **[System Integration](pages/integration.html)** - FreeWorldSystem class that ties everything together

## Documentation Status

⚠️ **Note**: Some documentation pages are still being created. The following pages exist:
- ✅ Device Context
- ✅ Compositor
- ✅ Resource Manager
- ✅ System Integration

The following pages need to be created:
- ⏳ Input Manager
- ⏳ Clipboard & Drag & Drop
- ⏳ Window Relationships
- ⏳ Menu System
- ⏳ Non-Client Area
- ⏳ Standard Controls
- ⏳ Timer Manager
- ⏳ Property Manager
- ⏳ Hook Manager
- ⏳ Focus Manager
- ⏳ Object Manager
- ⏳ Path Parser
- ⏳ Registry
- ⏳ File System Watcher
- ⏳ Security Manager
- ⏳ Error Manager
- ⏳ Shell Ecosystem

## Implementation Status

All subsystems are **structural implementations only**. They provide:
- Class definitions
- Method signatures
- Data structures
- Basic logic

They do NOT yet provide:
- Actual hardware access
- Real rendering
- Complete functionality
- Production-ready code

See [STATUS.md](../STATUS.md) and [REALITY_CHECK.md](../REALITY_CHECK.md) for more details.

