import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                lightRed: { value: "#f87171" },
                darkRed: { value: "#991919" },
            },
        },
        semanticTokens: {
            colors: {
                primary: {
                    value: { base: "#2563eb", _dark: "#a3cfff" },
                },
                danger: {
                    value: { base: "{colors.lightRed}", _dark: "{colors.darkRed}" }
                },
            },
        },
    },
})

export default createSystem(defaultConfig, config)