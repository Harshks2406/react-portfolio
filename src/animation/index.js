const animateLeftOrRight = (side, delay) => ({
    hidden: {x: side*100, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 1, delay: delay}}
})

const animateUpOrDown = (side, delay) => ({
    hidden: {y: side*100, opacity: 0},
    visible: {y: 0, opacity: 1, transition: {duration: 1, delay: delay}}
})

const animateAfterLeftOrRight = () => ({
    hidden: {opacity: 0, x: 100},
    visible: {transition: {duration: 0.5}}
})

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
})


export {animateLeftOrRight, animateAfterLeftOrRight, animateUpOrDown, iconVariants}

