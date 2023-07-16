
export default function ({ grid, getCoo, spacing=1, offset=0 }){

    return <>
        {grid.map((frame, i) => {
            const [x,y,z] = getCoo(i);
            return <group
                key={`grp${i}`}
                position={[x * spacing - offset, y * spacing - offset, z * spacing - offset]}
            >
                {frame.tile.createReactInstance()}
            </group>
        })}
    </>;
}