type Todo = {
    readonly id: number | string
    readonly text: string
    readonly done: boolean
    readonly place?: Place //optional
}
type CompletedTodo = Todo & {
    readonly done: true
}
type Place = 'home' | 'work' | { custom:  string   }

interface Pair<A, B>{
    first: A
    second: B
}
//generic interface
//equal
//generic type
type Pair2<A , B>={
    first: A
    second: B
}

function makeState<S extends number | string = number>(){
    let state: S
    function getState(){
        return state
    }
    function setState( x : S ){
        state = x
    }
    return {getState, setState}
}
// generic. S đại diện cho type, tùy biến tùy vào type truyền vào
//extends number | string: Generic chỉ nhận type number và string
//= number: mặc định nếu không truyền vào thì lấy là number

function makePair<F, S>(){
    let pair: {
        first: F,
        second: S
    }  
    // equal 
    // let pair: Pair<F, S>
    function getPair(){
        return pair
    }
    function setPair(x: F, y: S){
        pair = {
            first: x,
            second: y
        }
    }
    return { getPair, setPair }
}
//generic class
class State<S> {
    state: S 
    getState(){
        return this.state
    }
    setState(x: S){
        this.state = x
    }
}

function toggleTodo(todo: Todo): Todo {
    return {
        ...todo,
        done: !todo.done
    }
}
function completedTodo(todo: readonly Todo[]): CompletedTodo[] 
{
    return todo.map(todo => ({
        ...todo,
        done: true
    }))
}
function placeToString(place: Place): string{
    if ( place === 'home' )
        return '/\ Home'
    else if ( place === 'work' )
        return '|-| Work'
    return '!'+place.custom
}

const a = {
    id : 1,
    text: 'One',
    done: true,
}
const b = makeState()
console.log(a)