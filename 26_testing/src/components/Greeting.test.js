import {render,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"

describe("Greeting component",()=>{

    test("renders Hello World as a text",()=>{
        // Arrange
        render(<Greeting />)
        // Act
        // .... nothing
        //Assert
        const helloWorldElement = screen.getByText("Hello World",{exact:false})
        expect(helloWorldElement).toBeInTheDocument()
    })

    test("renders 'It's good to see you!' if the button was not clicked",()=>{
        render(<Greeting />)
        const textElement = screen.getByText("It's good to see you!")
        expect(textElement).toBeInTheDocument()
    })

    test("renders 'Changed!' if the button was clicked",()=>{
        render(<Greeting />)

        const buttonElement = screen.getByRole("button")
        userEvent.click(buttonElement)

        const changedTextElement = screen.getByText("Changed!")
        expect(changedTextElement).toBeInTheDocument()
    })

    test("does not render 'It's good to see you!' if button is clicked",()=>{
        render(<Greeting/>)

        const buttonElement = screen.getByRole("button")
        userEvent.click(buttonElement)
        
        const textElement = screen.queryByText("It's good to see you!")
        expect(textElement).toBeNull()
    })
})

