
export default function ({ grid, tileset, spacing=1, offset=0 }){

    return <>
        {grid.map((row, x) =>
            row.map((line, y) =>
                line.map((id, z) => {
                    return <group
                        key={`grp${x}${y}${z}`}
                        position={[x * spacing - offset, y * spacing - offset, z * spacing - offset]}>
                        {tileset[id].instantiate}
                    </group>
                })
            )
        )}
    </>;
}