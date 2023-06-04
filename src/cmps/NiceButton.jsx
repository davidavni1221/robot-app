
export function NiceButton({ Icon, children, ...restOfProps }) {
    console.log('restOfProps:', restOfProps)
    return (
        <button {...restOfProps}>
            {Icon && <Icon />}
            {Icon && <span>&nbsp;</span>}
            {children}
        </button>
    )
}

// NiceButton.defaultProps = {
//     Icon: () => ''
// }