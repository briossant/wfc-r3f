
export default function ({ grid, spacing=1, offset=0 }){



    return <>
        {grid.flatMap((row,x) =>
            row.flatMap((line,y) =>
                line.map((frame,z) =>
                    <group position={[x*spacing-offset,y*spacing-offset,z*spacing-offset]}>
                        {frame.tile}
                    </group>
                )
            )
        )}
    </>
}