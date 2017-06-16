so we did this before;

```typescript
export class ReducerBuilder<TState> {
    private map: { [action: string]: Reducer<TState, any>; };
    constructor() {
        this.map = {};
    }
    add<TPayload>(action: ActionCreator<Action<TPayload>>, reducer: Reducer<TState, TPayload>) {
        this.map[action.toString()] = reducer;
        return this;
    }
    build(): Reducer<TState, any> {
        const mapClone = Object.assign({}, this.map);
        return (state: TState = {} as any, action: Action<any>) => {
            let handler = mapClone[action.type];
            return handler ? handler(state, action) : state;
        };
    }
}
```