import { fireEvent, getByTestId } from "@testing-library/react";
import { render } from "@testing-library/react";
import Counter from "./Counter";


test("counter display the correct initial count", ()=>{
    const{getByTestId} = render(<Counter initialCount={0}/>);
    const counterElement = getByTestId("count");
    expect(counterElement.textContent).toBe("0")
});

test("Coutn should be increment by one if the increment button is clicked",()=>{
    const{getByTestId, getByRole } = render(<Counter initialCount = {0}/>)
    const incrementBtn = getByRole("button",{name:"Increment"})
    fireEvent.click(incrementBtn);
    const countValue = Number(getByTestId("count").textContent)
    expect(countValue).toBe(1);
})


test("Coutn should be increment by one if the decremenmt button is clicked",()=>{
    const{getByTestId, getByRole } = render(<Counter initialCount = {0}/>)
    const decrementBtn = getByRole("button",{name:"Decrement"})
    fireEvent.click(decrementBtn);
    const countValue = Number(getByTestId("count").textContent)
    expect(countValue).toBe(-1);
})

//test or describe

describe(Counter,()=>{
    it("Count should be swap when we click the swap button",()=>{
        const{getByTestId,getByRole} = render(<Counter initialCount={50}/>)
        const restartBtn  =getByRole("button",{name: "Restart"})
        expect(Number(getByTestId("count").textContent)).toEqual(50);
        fireEvent.click(restartBtn);
        expect(Number(getByTestId("count").textContent)).toEqual(0)
    })
})



test("Display Hello", ()=>{
    const{getByTestId} = render(<Counter initialCount={"Hello"}/>);
    const counterElement = getByTestId("count");
    expect(counterElement.textContent).toBe("Hello")
});
