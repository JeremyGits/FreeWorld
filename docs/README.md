# FreeWorld Operating System

A modern, architecture-independent operating system built with ASM/C/C++ for boot and Node.js for the core system.

## Architecture

FreeWorld is designed to support all modern and future CPU architectures and hardware. The boot process is handled by low-level ASM/C/C++ components, while the core system runs on Node.js for maximum flexibility and performance.

### Boot Architecture
- **UEFI Boot**: Modern firmware-based booting with 64-bit long mode entry
- **Early Hardware Detection**: Comprehensive hardware enumeration before drivers load
- **ACPI Support**: Complete ACPI table parsing for hardware configuration
- **Boot Parameters**: Flexible command-line configuration and boot flags
- **Kernel Decompression**: Automatic detection and decompression of compressed kernels

## Components

### Boot Components
- **BOOTMGR**: FreeWorld Boot Manager
- **BCD**: Boot Configuration Data store
- **freeload.exe**: Operating system loader
- **UEFI Boot**: Modern UEFI bootloader with boot parameters, ACPI, and initrd support ✅
- **fwoskrnl.exe**: FreeWorld kernel executive
- **hal.dll**: Hardware Abstraction Layer
- **smss.exe**: Session Manager Subsystem
- **csrss.exe**: Client Server Runtime Subsystem
- **freeworldlogon.exe**: User login manager

### Core System
- **Early Hardware Detection**: Comprehensive hardware detection before drivers load ✅
- **ACPI Support**: Complete ACPI table parsing and device tree enumeration ✅
- **Boot Parameters**: Enhanced command-line parsing and boot configuration ✅
- **Kernel Decompression**: Full support for gzip, LZMA2/XZ, and ZSTD ✅
- **Native Filesystem Support**: FAT32, ext2/3/4, NTFS drivers ✅

### User Interface
- **Shell**: Command-line interpreter with blue "FREE" and white "WORLD" prompt
- **Wanderer**: File manager (similar to Explorer/Nautilus)

## Filesystem Structure

FreeWorld uses a Linux-like filesystem structure for organization and compatibility.

## Building

See BUILD.md for build instructions.

## Documentation

Complete documentation is available in the `/docs` folder. Open `docs/index.html` in a web browser to view.

### Documentation Status

- ✅ Boot Components - Fully documented (UEFI Boot, Boot Parameters)
- ✅ Core System - Fully documented (Early Hardware Detection, ACPI Support, Kernel Decompression)
- ✅ Services - Fully documented
- ✅ User Interface - Fully documented
- ⏳ GUI Subsystems - Partially documented
- ⏳ System Services - Partially documented
- ✅ Node.js System - Fully documented
- ✅ Reference - Fully documented

See [docs/README.md](docs/README.md) for complete documentation index.

## Current Status

FreeWorld OS is under active development with significant progress on core boot and hardware systems.

### Recent Achievements ✅

**Boot System (75% complete)**
- ✅ UEFI Boot - Complete modern UEFI bootloader with boot parameters, ACPI RSDP passing, initrd support
- ✅ Kernel Decompression - Full support for gzip, LZMA2/XZ, and ZSTD (~5,000 lines)
- ✅ Early Hardware Detection - Comprehensive hardware detection (CPU, memory, PCI, APIC, storage, display, network, audio, USB)
- ✅ ACPI Support - Complete table parsing (FADT, MADT, DSDT, SRAT, MCFG, HPET, etc.) and device tree enumeration
- ✅ Boot Parameters - Enhanced command-line parsing with flags and parameters

**Core System**
- ✅ Native Filesystem Support - FAT32, ext2/3/4, NTFS drivers
- ✅ Memory Management - Paging, frame allocator, heap allocator
- ✅ Process Management - Process/thread creation, scheduling
- ✅ I/O Infrastructure - Serial ports, IRQ handling
- ✅ Device Drivers - VGA, keyboard, timer, mouse, VESA

### What's Implemented
- ✅ UEFI bootloader with complete boot parameter passing
- ✅ Early hardware detection (comprehensive device enumeration)
- ✅ ACPI table parsing and device tree building
- ✅ Boot parameter parsing (command-line, flags, parameters)
- ✅ Kernel decompression (gzip, LZMA2/XZ, ZSTD)
- ✅ Native filesystem drivers (FAT32, ext2/3/4, NTFS)
- ✅ Memory management (paging, heap)
- ✅ Process and thread management
- ✅ Device drivers (VGA, keyboard, timer, mouse, VESA)
- ✅ Shell with command parsing
- ✅ GUI subsystem class definitions

### Development Status
- **Current Completion**: ~18-22% (see [REMAINING-WORK-ASSESSMENT.md](REMAINING-WORK-ASSESSMENT.md) for detailed breakdown)
- **Boot System**: 75% complete
- **Kernel Core**: Significant progress on hardware detection, ACPI, decompression
- **Next Steps**: Continue building out critical path components (init process, root filesystem mount, service startup)

