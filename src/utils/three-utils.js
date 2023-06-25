import {useEffect, useCallback } from 'react';
import {useHingeConstraint } from '@react-three/cannon';

export const useDragConstraint = (cursor, child) => {
    const [,,api] = useHingeConstraint(cursor, child);
    useEffect(() => void api.disable(), [])
    const onPointerDown = useCallback((e) => {
      e.stopPropagation()
      //@ts-expect-error Investigate proper types here.
      e.target.setPointerCapture(e.pointerId)
      api.enable()
    }, [])
    const onPointerUp = useCallback(() => api.disable(), [])
    return { onPointerDown, onPointerUp }
  }

export const rotate = (cx, cy, x, y, angle) => {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}

export const generatePoints = (x) => {
    const points = [];
  
    while (points.length < x) {
      const point = [
        Math.random() * 26 - 13, // Random value between -13 and 13 for x
        Math.random() * 3 + 5, // Random value between 5 and 15 for z
        Math.random() * 26 - 13, // Random value between -13 and 13 for y
      ];
  
      if (points.every(p => distance(p, point) >= 2)) {
        points.push(point);
      }
    }
  
    return points;
  }
  
export const distance = (p1, p2) => {
    const dx = p2[0] - p1[0];
    const dy = p2[1] - p1[1];
    const dz = p2[2] - p1[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  
  
  
  
  
  