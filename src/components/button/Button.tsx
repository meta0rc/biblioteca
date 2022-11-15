import { Button as ButtonComponent } from "./style"

export const Button = ({ label } : { label: string }) => {
    return (
        <ButtonComponent>
            { label }
        </ButtonComponent>
    )
}