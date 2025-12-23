# Custom Design System Specification

## 1. Executive Summary
This document outlines the architecture and user experience for a **General-Purpose Custom Design System** capable of handling both print and digital products. The system relies on a **Dynamic Canvas Engine** that adapts constraints, resolution, and tools based on the selected product type.

## 2. User Experience (UX) Flow

### Phase 1: Context & Selection
**Goal:** Establish the constraint environment (Dimensions, Color Mode, DPI).
1.  **Entry Point:** User clicks "Create Custom Design".
2.  **Product Selection Modal:**
    *   **Tabs:** Print / Digital.
    *   **Grid:** Icons of T-shirts, Cards, Posts.
    *   **Selection Action:** Clicking an item immediately initializes the canvas with specific preset data (e.g., *Business Card: 3.5x2", CMYK preview mode*).

### Phase 2: The Workspace (The "Editor")
**Layout:**
*   **Left Sidebar (Tools):** Asset libraries, shapes, text, drawing.
*   **Top Bar (Context):** Undo/Redo, Zoom, Safe Zone toggle, Grid snapping, Export.
*   **Center(Canvas):** The infinite workspace holding the active artboard.
    *   *Visuals:* Drop shadow to distinguish artboard from workspace.
    *   *Overlays:* Bleed lines (red dashed), Safe zones (green dashed).
*   **Right Sidebar (Properties):** Context-sensitive controls for the *selected* element (Color, Font, Layer ordering).
*   **Mobile Adaptation:**
    *   Sidebars collapse into bottom sheet drawers.
    *   Pinch-to-zoom becomes primary navigation.

### Phase 3: Export & Output
**Logic:**
*   **Print:** High-res rendering (300 DPI scale factor). Export as PDF (Vector text) or PNG.
*   **Digital:** Screen resolution (72/96 DPI). Export as JPG/WebP.

---

## 3. Technical Architecture (Frontend)

### 3.1 Core Modules

#### A. Canvas Config Engine
Central state managing the physical vs. display reality.
```typescript
interface CanvasConfig {
  type: 'print' | 'digital';
  widthMM: number;       // Physical width
  heightMM: number;      // Physical height
  bleedMM: number;       // Extra edge for print
  pixelsPerUnit: number; // Viewport scaling factor
  orientation: 'portrait' | 'landscape';
}
```

#### B. Element System (The "Scene Graph")
A normalized array of objects representing the design.
```typescript
type DesignElement = {
  id: string;
  type: 'text' | 'image' | 'shape';
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
  zIndex: number;
  data: TextData | ImageData | ShapeData;
}
```

#### C. Interaction Layer
*   **Selection Manager:** Handles single/multi-selection (Shift+Click).
*   **Transform Manager:** Handles bounding box resizing, rotating handles.
*   **Snapping Engine:** Calculates proximity to grid lines or other element edges during drag.

### 3.2 Feature Specifications

#### A. Typography Engine
*   **Font Loader:** Lazy load fonts from Google Fonts API to avoid bloat.
*   **Text Manipulation:**
    *   *Curve Text:* Render text on `<path>` or using segmented rotation.
    *   *Rich Text:* Basic HTML/Canvas rendering for bold/italic mixed spans.

#### B. Shape & Vector System
*   Support SVG strings for complex shapes.
*   Properties: `fill`, `stroke`, `strokeWidth`, `shadowBlur`, `shadowColor`.

#### C. Image Processing
*   **Masking:** Clipping groups (e.g., User Photo clipped inside a Circle layout).
*   **Filters:** CSS filters (brightness, contrast) for preview; Canvas filters for export.

### 4. Implementation Roadmap

#### Step 1: The Foundation (Current Phase)
*   State management for Elements.
*   Basic HTML/CSS Canvas.
*   **Action:** Upgrade to Dynamic Sizing (See below).

#### Step 2: Advanced Rendering
*   Migrate rendering engine to **Canvas API** (via `react-konva` or `fabric.js`) for pixel-perfect export. DOM-based rendering is insufficient for high-quality print exports due to browser rendering inconsistencies.

#### Step 3: Intelligence
*   Implement layout constraints (e.g., "Text cannot cross Safe Zone").
*   Add auto-centering and alignment guides.

---

## 5. Development Handout: "The Design Editor 2.0"
*Recommendations for immediately upgrading the current prototype.*

1.  **Refactor for Scale:** Move `elements` state to a dedicated `useDesignSystem` hook or Redux/Zustand store.
2.  **Add Product Presets:** Create a configuration file `designPresets.js` mapping IDs (visiting-card) to dimensions.
3.  **Implement Scaling:** The canvas must render at `Physical Size * Zoom Factor`. CSS `transform: scale()` is useful for DOM-based zoom.
