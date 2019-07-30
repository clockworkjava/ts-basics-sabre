interface WrapType<T> {
    value: T
}

function  wrap<T>(x: T) : WrapType<T> {
    return {
        value: x
    }
}

const x : WrapType<number> = wrap<number>(5);

console.log(JSON.stringify(x));

// wrap<number>("pawel");

wrap("pawel");

interface Other<T extends {description: string}> {
    value : T;
}

