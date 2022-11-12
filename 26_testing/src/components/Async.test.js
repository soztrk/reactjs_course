import {render,screen} from "@testing-library/react"
import Async from "./Async"

describe("Async component",()=>{

    test("renders posts id request succeeds", async () => {
        // Generates mock data 
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json:async () => [{id:"p1",titile:"Mock data"}]
        })
        // ------------------
        render(<Async/>)

        const listElements = await screen.findAllByRole("listitem")
        expect(listElements).not.toHaveLength(0)
    })

})