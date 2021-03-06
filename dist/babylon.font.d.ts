// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../@assemblyscript/loader

declare module 'babylon.font' {
    export { Compiler } from 'babylon.font/compiler';
    export { Font } from 'babylon.font/font';
}

declare module 'babylon.font/compiler' {
    import * as loader from '@assemblyscript/loader';
    interface IPathCommand {
        type: string;
        x?: number;
        y?: number;
        x1?: number;
        y1?: number;
        x2?: number;
        y2?: number;
    }
    interface MyAPI {
        memory: WebAssembly.Memory;
        compile(bytesUsed: number, fmt: string, ppc: number, eps: number): number;
    }
    type Vertex = [number, number];
    type Polygon = Vertex[];
    export type Shape = {
        fill: Polygon;
        holes: Polygon[];
    };
    export class Compiler {
        constructor(wasm: loader.ASUtil & MyAPI);
        static Build(wasmUrl: string): Promise<Compiler>;
        encode(cmds: IPathCommand[], buffer: ArrayBuffer): number;
        compileEncoded(buffer: ArrayBuffer, bytesUsed: number, fmt: string, ppc: number, eps: number): Shape[];
        compile(cmds: IPathCommand[], fmt: string, ppc: number, eps: number): Shape[];
    }
    export {};
}

declare module 'babylon.font/font' {
    import { Compiler } from 'babylon.font/compiler';
    type Shape = {
        fill: BABYLON.Vector3[];
        holes: BABYLON.Vector3[][];
    };
    type PolygonMeshOption = {
        backUVs?: BABYLON.Vector4;
        depth?: number;
        faceColors?: BABYLON.Color4[];
        faceUV?: BABYLON.Vector4[];
        frontUVs?: BABYLON.Vector4;
        sideOrientation?: number;
        updatable?: boolean;
    };
    export class Font {
        raw: opentype.Font;
        constructor(raw: opentype.Font, compiler: Compiler);
        static Install(fontUrl: string, compiler: Compiler): Promise<Font>;
        static Measure(font: Font, name: string, size: number): Metrics;
        static Compile(font: Font, name: string, size: number, ppc: number, eps: number): Shape[];
        static BuildMesh(shapes: Shape[], option?: PolygonMeshOption, scene?: BABYLON.Scene): BABYLON.Mesh;
    }
    export class Metrics {
        constructor(font: Font, name: string, size: number);
        get ascender(): number;
        get descender(): number;
        get advanceWidth(): number;
    }
    export {};
}

