# FreeWorld OS - All Subsystems Reference

Complete reference of all subsystems in FreeWorld OS.

## GUI Subsystems (Rendering & Display)

### Device Context (`system/dc.js`)
**Status**: Structural implementation  
**Documentation**: [dc.html](pages/dc.html)  
**Purpose**: Virtual canvas for drawing operations  
**Key Features**:
- Drawing primitives (pixels, lines, rectangles, text)
- Clipping regions
- Dirty region tracking
- GDI object selection (Pen, Brush, Font)
- BitBlt operations

### Compositor (`system/compositor.js`)
**Status**: Structural implementation  
**Documentation**: [compositor.html](pages/compositor.html)  
**Purpose**: Merges off-screen buffers before sending to screen  
**Key Features**:
- Z-order management
- Transparency and alpha blending
- Shadow rendering
- Invalidation region calculation

## Resource Management

### Resource Manager (`system/resources.js`)
**Status**: Structural implementation  
**Documentation**: [resources.html](pages/resources.html)  
**Purpose**: Global resource registry to prevent memory waste  
**Key Features**:
- Font management (loadFont, getFont)
- Icon management (loadIcon)
- Cursor management (loadCursor)
- Brush and Pen creation
- Bitmap loading
- Handle management with ownership tracking
- Automatic cleanup on window destruction

## Input Management

### Input Manager (`system/input.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: Handles keyboard focus, mouse capture, modifiers, hit testing  
**Key Features**:
- Keyboard focus management (WM_SETFOCUS, WM_KILLFOCUS)
- Mouse capture (setCapture, releaseCapture)
- Modifier state tracking (Shift, Ctrl, Alt, Meta)
- Scancode to ASCII translation
- Hit testing (Non-Client Area)
- Tab order navigation

## Inter-Process Communication

### Clipboard (`system/clipboard.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: Data exchange between applications  
**Key Features**:
- Multiple format support (CF_TEXT, CF_UNICODETEXT, CF_HTML, etc.)
- Delayed rendering (provide data on demand)
- Format registration
- Clipboard ownership tracking

### Drag & Drop (`system/clipboard.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: Drag and drop operations  
**Key Features**:
- Drag source tracking
- Drop target registration
- Drag move feedback (WM_DRAGMOVE)
- Format negotiation
- Drop acceptance/rejection

## Window Management

### Window Relationships (`system/window-relationships.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: Parent/child linking, clipping, modal loops  
**Key Features**:
- Parent/Child linking
- Coordinate transformation (screenToClient, clientToScreen)
- Clipping region calculation
- Modal loop management
- Window movement with children

### Non-Client Area (`system/nonclient.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: Window frames, title bars, resize borders  
**Key Features**:
- Title bar management
- Window button rendering (Close, Minimize, Maximize)
- Resize border handling
- Client rect calculation
- Hit test result handling (HTCAPTION, HTCLOSE, etc.)

### Focus Manager (`system/focus.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: Window activation and control focus  
**Key Features**:
- Window activation (WM_ACTIVATE)
- Control focus (WM_SETFOCUS, WM_KILLFOCUS)
- Z-order management
- Tab order navigation

## Controls & Menus

### Standard Controls (`system/controls.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: Built-in control classes  
**Key Features**:
- **ButtonControl**: Click handling, hover states, parent notification
- **EditControl**: Text buffer, caret management, selection, keyboard input
- **StaticControl**: Text/image display
- **ControlFactory**: Creates controls by class name

### Menu System (`system/menu.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: Menus, accelerators, menu loops  
**Key Features**:
- Menu item creation and management
- Submenu support
- Accelerator registration (Ctrl+S, etc.)
- Accelerator translation
- Menu loop for navigation

## System Services

### Timer Manager (`system/timer.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: SetTimer / KillTimer functionality  
**Key Features**:
- Priority queue of active timers
- WM_TIMER message delivery
- Window timer cleanup

### Property Manager (`system/property.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: SetProp / GetProp / RemoveProp  
**Key Features**:
- Atom table (string-to-integer lookup)
- Window property storage
- Property enumeration

### Hook Manager (`system/hooks.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: SetWindowsHookEx functionality  
**Key Features**:
- Hook types: WH_KEYBOARD, WH_MOUSE, WH_CBT, etc.
- Global and thread-local hooks
- Hook callback execution

## File & Object Management

### Object Manager (`system/object-manager.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: Handle management, file operations  
**Key Features**:
- Handle creation and management
- File operations (CreateFile, ReadFile, WriteFile)
- Access modes (GENERIC_READ, GENERIC_WRITE, etc.)
- Share mode conflict detection
- Creation dispositions

### Path Parser (`system/path.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: Virtual drives, relative paths  
**Key Features**:
- Virtual drive mapping (C:, D:, etc.)
- Relative path resolution
- Path normalization (.. and . handling)
- Current directory per process

### Registry (`system/registry.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: Hive management, key/value operations  
**Key Features**:
- Hive management (HKLM, HKCU, HKCR, etc.)
- Key operations (OpenKey, CreateKey, DeleteKey)
- Value operations (QueryValue, SetValue, DeleteValue)
- Value types (REG_SZ, REG_DWORD, REG_BINARY, etc.)
- Persistence to disk

### File System Watcher (`system/filesystem-watcher.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: Directory change notifications  
**Key Features**:
- Directory watching (ReadDirectoryChangesW equivalent)
- File watching
- Change notification delivery
- File action types (FILE_ACTION_ADDED, MODIFIED, etc.)

## Security & Error Handling

### Security Manager (`system/security.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: Sessions, tokens, ACLs, permissions  
**Key Features**:
- Session management
- Access token creation
- Privilege calculation
- Access Control Lists (ACLs)
- API access checks
- Group-based permissions

### Error Manager (`system/error.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: GetLastError, OutputDebugString  
**Key Features**:
- GetLastError / SetLastError
- Error code definitions
- Error message formatting
- OutputDebugString equivalent
- Debug output filtering
- Thread-local error storage

## Shell Ecosystem

### Shell Ecosystem (`system/shell.js`)
**Status**: Structural implementation  
**Documentation**: ⏳ To be created  
**Purpose**: Desktop, Taskbar, ShellExecute  
**Key Features**:
- **DesktopWindow**: Full-screen desktop window, icon management
- **Taskbar**: App bar logic, task button management, notification area
- **ShellExecute**: File association lookup, process launching

## Integration

### System Integration (`system/integration.js`)
**Status**: Structural implementation  
**Documentation**: [integration.html](pages/integration.html)  
**Purpose**: Ties all subsystems together  
**Key Features**:
- Initializes all subsystems
- Connects subsystems together
- Provides unified API
- System initialization and shutdown
- Graceful error handling

## Documentation Status Summary

- **Documented**: 4 of 20 new subsystems (20%)
- **To Document**: 16 subsystems remaining
- **Total Pages**: 23 existing + 4 new = 27 pages
- **Pages Needed**: 16 more pages

## Implementation Status

⚠️ **All subsystems are structural implementations only**. They require:
- Hardware access implementation
- Real rendering implementation
- Complete functionality
- Testing in QEMU

See [STATUS.md](../STATUS.md) for realistic assessment.

