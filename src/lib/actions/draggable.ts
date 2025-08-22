export type DraggableOptions = {
  handleSelector?: string;
  bounds?: { left: number; top: number; right: number; bottom: number };
  onPositionChange?: (x: number, y: number) => void;
};

export function draggable(node: HTMLElement, options: DraggableOptions = {}) {
  let startX = 0;
  let startY = 0;
  let initialLeft = 0;
  let initialTop = 0;
  let dragging = false;
  let zIndex = 1000;

  // Ensure node has absolute positioning and preserve original size
  if (getComputedStyle(node).position === 'static') {
    node.style.position = 'absolute';
  }
  
  // Store original dimensions to prevent scaling
  const originalWidth = node.offsetWidth;
  const originalHeight = node.offsetHeight;
  node.style.width = `${originalWidth}px`;
  node.style.height = `${originalHeight}px`;

  const handle: HTMLElement = options.handleSelector
    ? (node.querySelector(options.handleSelector) as HTMLElement) || node
    : node;

  function bringToFront() {
    zIndex += 1;
    node.style.zIndex = zIndex.toString();
  }

  function constrainPosition(left: number, top: number): { left: number; top: number } {
    if (!options.bounds) return { left, top };
    
    return {
      left: Math.max(options.bounds.left, Math.min(options.bounds.right - originalWidth, left)),
      top: Math.max(options.bounds.top, Math.min(options.bounds.bottom - originalHeight, top))
    };
  }

  function getCurrentPosition() {
    const computedStyle = getComputedStyle(node);
    const left = parseInt(computedStyle.left) || 0;
    const top = parseInt(computedStyle.top) || 0;
    return { left, top };
  }

  function onPointerDown(e: PointerEvent) {
    if (e.button !== 0) return;
    e.stopPropagation();
    
    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
    
    // Use computed style values instead of getBoundingClientRect to avoid offset issues
    const currentPos = getCurrentPosition();
    initialLeft = currentPos.left;
    initialTop = currentPos.top;
    
    bringToFront();
    handle.setPointerCapture?.(e.pointerId);
    e.preventDefault();
  }

  function onPointerMove(e: PointerEvent) {
    if (!dragging) return;
    
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    
    const newLeft = initialLeft + dx;
    const newTop = initialTop + dy;
    const constrained = constrainPosition(newLeft, newTop);
    
    node.style.left = `${constrained.left}px`;
    node.style.top = `${constrained.top}px`;
    
    // Call position change callback
    options.onPositionChange?.(constrained.left, constrained.top);
  }

  function onPointerUp(e: PointerEvent) {
    if (!dragging) return;
    dragging = false;
    handle.releasePointerCapture?.(e.pointerId);
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape' && dragging) {
      dragging = false;
      node.style.left = `${initialLeft}px`;
      node.style.top = `${initialTop}px`;
    }
  }

  handle.addEventListener('pointerdown', onPointerDown, { passive: false });
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('keydown', onKeyDown);

  return {
    destroy() {
      handle.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('keydown', onKeyDown);
    },
    update(newOptions: DraggableOptions) {
      Object.assign(options, newOptions);
    }
  };
}


