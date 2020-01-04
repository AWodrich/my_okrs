/*

 Tailwind - The Utility-First CSS Framework

 A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
 David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

 Welcome to the Tailwind config file. This is where you can customize
 Tailwind specifically for your project. Don't be intimidated by the
 length of this file. It's really just a big JavaScript object and
 we've done our very best to explain each section.

 View the full documentation at https://tailwindcss.com.



 /*
 |-------------------------------------------------------------------------------
 | Colors                                    https://tailwindcss.com/docs/colors
 |-------------------------------------------------------------------------------
 |
 | Here you can specify the colors used in your project. To get you started,
 | we've provided a generous palette of great looking colors that are perfect
 | for prototyping, but don't hesitate to change them for your project. You
 | own these colors, nothing will break if you change everything about them.
 |
 | We've used literal color names ("red", "blue", etc.) for the default
 | palette, but if you'd rather use functional names like "primary" and
 | "secondary", or even a numeric scale like "100" and "200", go for it.
 |
 */

const GRID_BASE = 12;
const BASE_GRID_UNIT_PERCENTAGE = (100 / GRID_BASE);


module.exports = {
    theme: {

        /*
         |-----------------------------------------------------------------------------
         | Colors                                  https://tailwindcss.com/docs/colors
         |-----------------------------------------------------------------------------
         |
         | The color palette defined above is also assigned to the "colors" key of
         | your Tailwind config. This makes it easy to access them in your CSS
         | using Tailwind's config helper. For example:
         |
         | .error { color: config('colors.red') }
         |
         */

        colors: {
            transparent: 'transparent',

            black: '#000000',
            'grey-darkest': '#3D4852',
            'grey-darker': '#606F7B',
            'grey-dark': '#8795A1',
            grey: '#B8C2CC',
            'grey-light': '#DAE1E7',
            'grey-lighter': '#F1F5F8',
            'grey-lightest': 'rgb(242,242,242)',
            'grey-lightest-alpha8': 'rgba(242,242,242, .8)',
            'grey-faint': 'rgb(250, 250, 250)',
            white: '#FFFFFF',
            'white-alpha8': 'rgba(255, 255, 255, .8)',

            red: 'rgb(225, 0, 22)',
            'red-alpha1': 'rgba(225, 0, 22, .1)',
            'red-alpha8': 'rgba(225, 0, 22, .8)',
            'red-dark': 'rgb(174,0,17)',
            'blue-light': 'rgb(89, 211, 254)',
            blue: 'rgb(36, 118, 180)',
            'blue-dark': 'rgb(2, 51, 97)',

            yellow: 'rgb(255, 237, 74)',
            'yellow-light': 'rgb(255, 243, 130)',

            // Social Colors
            facebook: 'rgb(45, 67, 110)',
            'facebook-dim': 'rgb(41, 61, 100)',
            twitter: 'rgb(4, 196, 250)',
            'twitter-dim': 'rgb(3, 176, 225)',
            whatsapp: 'rgb(38, 211, 102)',
            'whatsapp-dim': 'rgb(16, 187, 79)'

        },


        /*
         |-----------------------------------------------------------------------------
         | Screens                      https://tailwindcss.com/docs/responsive-design
         |-----------------------------------------------------------------------------
         |
         | Screens in Tailwind are translated to CSS media queries. They define the
         | responsive breakpoints for your project. By default Tailwind takes a
         | "mobile first" approach, where each screen size represents a minimum
         | viewport width. Feel free to have as few or as many screens as you
         | want, naming them in whatever way you'd prefer for your project.
         |
         | Tailwind also allows for more complex screen definitions, which can be
         | useful in certain situations. Be sure to see the full responsive
         | documentation for a complete list of options.
         |
         | Class name: .{screen}:{utility}
         |
         */

        screens: {
            xs: '480px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            xxl: '1400px',
        },


        /*
         |-----------------------------------------------------------------------------
         | fontFamily                                    https://tailwindcss.com/docs/fonts
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your project's font stack, or font families.
         | Keep in mind that Tailwind doesn't actually load any fonts for you.
         | If you're using custom fonts you'll need to import them prior to
         | defining them here.
         |
         | By default we provide a native font stack that works remarkably well on
         | any device or OS you're using, since it just uses the default fonts
         | provided by the platform.
         |
         | Class name: .font-{name}
         |
         */

        fontFamily: {
            sans: [
                'Orf On',
                'Ubuntu',
                'system-ui',
                'BlinkMacSystemFont',
                '-apple-system',
                'Segoe UI',
                'Roboto',
                'Oxygen',
                'Ubuntu',
                'Cantarell',
                'Fira Sans',
                'Droid Sans',
                'Helvetica Neue',
                'sans-serif',
            ],
            serif: [
                'Constantia',
                'Lucida Bright',
                'Lucidabright',
                'Lucida Serif',
                'Lucida',
                'DejaVu Serif',
                'Bitstream Vera Serif',
                'Liberation Serif',
                'Georgia',
                'serif',
            ],
            mono: [
                'Menlo',
                'Monaco',
                'Consolas',
                'Liberation Mono',
                'Courier New',
                'monospace',
            ],
        },


        /*
         |-----------------------------------------------------------------------------
         | Text sizes                         https://tailwindcss.com/docs/text-sizing
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your text sizes. Name these in whatever way
         | makes the most sense to you. We use size names by default, but
         | you're welcome to use a numeric scale or even something else
         | entirely.
         |
         | By default Tailwind uses the "rem" unit type for most measurements.
         | This allows you to set a root font size which all other sizes are
         | then based on. That said, you are free to use whatever units you
         | prefer, be it rems, ems, pixels or other.
         |
         | Class name: .text-{size}
         |
         */

        fontSize: {
            xs: '1rem', // 12px
            sm: '1.4rem', // 14px
            base: '1.6rem', // 16px
            lg: '1.8rem', // 18px
            xl: '2rem', // 20px
            '2xl': '2.4rem', // 24px
            '3xl': '3rem', // 30px
            '4xl': '3.65rem', // 36px
            '5xl': '4.8rem', // 48px
        },


        /*
         |-----------------------------------------------------------------------------
         | Font weights                       https://tailwindcss.com/docs/font-weight
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your font weights. We've provided a list of
         | common font weight names with their respective numeric scale values
         | to get you started. It's unlikely that your project will require
         | all of these, so we recommend removing those you don't need.
         |
         | Class name: .font-{weight}
         |
         */

        fontWeight: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
        },


        /*
         |-----------------------------------------------------------------------------
         | lineHeight (line height)              https://tailwindcss.com/docs/line-height
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your line height values, or as we call
         | them in Tailwind, leadings.
         |
         | Class name: .lineHeight-{size}
         |
         */

        lineHeight: {
            none: 1,
            tight: 1.25,
            normal: 1.5,
            loose: 2,
        },


        /*
         |-----------------------------------------------------------------------------
         | letterSpacing (letter spacing)       https://tailwindcss.com/docs/letter-spacing
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your letter spacing values, or as we call
         | them in Tailwind, letterSpacing.
         |
         | Class name: .letterSpacing-{size}
         |
         */

        letterSpacing: {
            tight: '-0.05em',
            normal: '0',
            wide: '0.05em',
        },


        /*
         |-----------------------------------------------------------------------------
         | Text colors                         https://tailwindcss.com/docs/text-color
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your text colors. By default these use the
         | color palette we defined above, however you're welcome to set these
         | independently if that makes sense for your project.
         |
         | Class name: .text-{color}
         |
         */

        textColor: theme => theme('colors'),


        /*
         |-----------------------------------------------------------------------------
         | Background colors             https://tailwindcss.com/docs/background-color
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your background colors. By default these use
         | the color palette we defined above, however you're welcome to set
         | these independently if that makes sense for your project.
         |
         | Class name: .bg-{color}
         |
         */

        backgroundColor: theme => theme('colors'),


        /*
         |-----------------------------------------------------------------------------
         | Background sizes               https://tailwindcss.com/docs/background-size
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your background sizes. We provide some common
         | values that are useful in most projects, but feel free to add other sizes
         | that are specific to your project here as well.
         |
         | Class name: .bg-{size}
         |
         */

        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
        },


        /*
         |-----------------------------------------------------------------------------
         | Border widths                     https://tailwindcss.com/docs/border-width
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your border widths. Take note that border
         | widths require a special "default" value set as well. This is the
         | width that will be used when you do not specify a border width.
         |
         | Class name: .border{-side?}{-width?}
         |
         */

        borderWidth: {
            default: '1px',
            0: '0',
            2: '2px',
            4: '4px',
            8: '8px',
        },


        /*
         |-----------------------------------------------------------------------------
         | Border colors                     https://tailwindcss.com/docs/border-color
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your border colors. By default these use the
         | color palette we defined above, however you're welcome to set these
         | independently if that makes sense for your project.
         |
         | Take note that border colors require a special "default" value set
         | as well. This is the color that will be used when you do not
         | specify a border color.
         |
         | Class name: .border-{color}
         |
         */

        borderColor: theme => ({
            default: theme('colors.grey-light'), ...theme('colors'),
        }),

        /*
         |-----------------------------------------------------------------------------
         | Border radius                    https://tailwindcss.com/docs/border-radius
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your border radius values. If a `default` radius
         | is provided, it will be made available as the non-suffixed `.rounded`
         | utility.
         |
         | If your scale includes a `0` value to reset already rounded corners, it's
         | a good idea to put it first so other values are able to override it.
         |
         | Class name: .rounded{-side?}{-size?}
         |
         */

        borderRadius: {
            none: '0',
            sm: '.2rem',
            default: '.4rem',
            lg: '.8rem',
            xl: '1.92rem',
            full: '9999px',
        },


        /*
         |-----------------------------------------------------------------------------
         | Width                                    https://tailwindcss.com/docs/width
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your width utility sizes. These can be
         | percentage based, pixels, rems, or any other units. By default
         | we provide a sensible rem based numeric scale, a percentage
         | based fraction scale, plus some other common use-cases. You
         | can, of course, modify these values as needed.
         |
         |
         | It's also worth mentioning that Tailwind automatically escapes
         | invalid CSS class name characters, which allows you to have
         | awesome classes like .w-2/3.
         |
         | Class name: .w-{size}
         |
         */

        width: {
            auto: 'auto',
            px: '1px',
            1: '0.4rem',
            2: '0.8rem',
            3: '1.2rem',
            4: '1.5rem',
            5: '2rem',
            6: '2.4rem',
            8: '3.2rem',
            10: '4rem',
            12: '4.8rem',
            16: '6.4rem',
            24: '9.6rem',
            32: '12.8rem',
            48: '19.2rem',
            64: '25.2rem',
            '1/2': '50%',
            '1/3': '33.33333%',
            '2/3': '66.66667%',
            '1/4': '25%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': `${ (BASE_GRID_UNIT_PERCENTAGE * 2) }%`,
            '2/6': `${ (BASE_GRID_UNIT_PERCENTAGE * 4) }%`,
            '3/6': `${ (BASE_GRID_UNIT_PERCENTAGE * 6) }%`,
            '4/6': `${ (BASE_GRID_UNIT_PERCENTAGE * 8) }%`,
            '5/6': '83.33333%',
            half: '50%',
            full: '100%',
            screen: '100vw',
        },


        /*
         |-----------------------------------------------------------------------------
         | Height                                  https://tailwindcss.com/docs/height
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your height utility sizes. These can be
         | percentage based, pixels, rems, or any other units. By default
         | we provide a sensible rem based numeric scale plus some other
         | common use-cases. You can, of course, modify these values as
         | needed.
         |
         | Class name: .h-{size}
         |
         */

        height: {
            auto: 'auto',
            px: '1px',
            1: '0.4rem',
            2: '0.8rem',
            3: '1.2rem',
            4: '1.5rem',
            5: '2rem',
            6: '2.4rem',
            8: '3.2rem',
            10: '4rem',
            12: '4.8rem',
            16: '6.4rem',
            24: '9.6rem',
            32: '12.8rem',
            48: '19.2rem',
            64: '25.2rem',
            half: '50%',
            full: '100%',
            screen: '100vh',
        },


        /*
         |-----------------------------------------------------------------------------
         | Minimum width                        https://tailwindcss.com/docs/min-width
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your minimum width utility sizes. These can
         | be percentage based, pixels, rems, or any other units. We provide a
         | couple common use-cases by default. You can, of course, modify
         | these values as needed.
         |
         | Class name: .min-w-{size}
         |
         */

        minWidth: {
            0: '0',
            full: '100%',
        },


        /*
         |-----------------------------------------------------------------------------
         | Minimum height                      https://tailwindcss.com/docs/min-height
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your minimum height utility sizes. These can
         | be percentage based, pixels, rems, or any other units. We provide a
         | few common use-cases by default. You can, of course, modify these
         | values as needed.
         |
         | Class name: .min-h-{size}
         |
         */

        minHeight: {
            0: '0',
            16: '6.4rem',
            20: '8rem',
            full: '100%',
            screen: '100vh',
        },


        /*
         |-----------------------------------------------------------------------------
         | Maximum width                        https://tailwindcss.com/docs/max-width
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your maximum width utility sizes. These can
         | be percentage based, pixels, rems, or any other units. By default
         | we provide a sensible rem based scale and a "full width" size,
         | which is basically a reset utility. You can, of course,
         | modify these values as needed.
         |
         | Class name: .max-w-{size}
         |
         */

        maxWidth: {
            xs: '32rem',
            sm: '48rem',
            md: '64rem',
            lg: '80rem',
            xl: '96rem',
            '2xl': '112rem',
            '3xl': '126rem',
            '4xl': '144rem',
            '5xl': '160rem',
            '3/4': '75%',
            half: '75%',
            full: '100%',
        },


        /*
         |-----------------------------------------------------------------------------
         | Maximum height                      https://tailwindcss.com/docs/max-height
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your maximum height utility sizes. These can
         | be percentage based, pixels, rems, or any other units. We provide a
         | couple common use-cases by default. You can, of course, modify
         | these values as needed.
         |
         | Class name: .max-h-{size}
         |
         */

        maxHeight: {
            full: '100%',
            screen: '100vh',
        },


        /*
         |-----------------------------------------------------------------------------
         | Padding                                https://tailwindcss.com/docs/padding
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your padding utility sizes. These can be
         | percentage based, pixels, rems, or any other units. By default we
         | provide a sensible rem based numeric scale plus a couple other
         | common use-cases like "1px". You can, of course, modify these
         | values as needed.
         |
         | Class name: .p{side?}-{size}
         |
         */

        padding: {
            px: '1px',
            0: '0',
            1: '0.4rem',
            2: '0.8rem',
            3: '1.2rem',
            4: '1.5rem',
            5: '2rem',
            6: '2.4rem',
            8: '3.2rem',
            10: '4rem',
            12: '4.8rem',
            16: '6.4rem',
            24: '9.6rem',
            32: '12.8rem',
            48: '19.2rem',
            64: '25.2rem',
        },


        /*
         |-----------------------------------------------------------------------------
         | Margin                                  https://tailwindcss.com/docs/margin
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your margin utility sizes. These can be
         | percentage based, pixels, rems, or any other units. By default we
         | provide a sensible rem based numeric scale plus a couple other
         | common use-cases like "1px". You can, of course, modify these
         | values as needed.
         |
         | Class name: .m{side?}-{size}
         |
         */

        margin: {
            auto: 'auto',
            px: '1px',
            0: '0',
            1: '0.4rem',
            2: '0.8rem',
            3: '1.2rem',
            4: '1.5rem',
            5: '2rem',
            6: '2.4rem',
            8: '3.2rem',
            10: '4rem',
            12: '4.8rem',
            16: '6.4rem',
            24: '9.6rem',
            32: '12.8rem',
            48: '19.2rem',
            64: '25.2rem',

            '-px': '1px',
            '-0': '0',
            '-1': '0.4rem',
            '-2': '0.8rem',
            '-3': '1.2rem',
            '-4': '1.5rem',
            '-5': '2rem',
            '-6': '2.4rem',
            '-8': '3.2rem',
            '-10': '4rem',
            '-12': '4.8rem',
            '-16': '6.4rem',
            '-24': '9.6rem',
            '-32': '12.8rem',
            '-48': '19.2rem',
            '-64': '25.2rem',
        },


        /*
         |-----------------------------------------------------------------------------
         | boxShadow                                https://tailwindcss.com/docs/boxShadow
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your shadow utilities. As you can see from
         | the defaults we provide, it's possible to apply multiple boxShadow
         | per utility using comma separation.
         |
         | If a `default` shadow is provided, it will be made available as the non-
         | suffixed `.shadow` utility.
         |
         | Class name: .shadow-{size?}
         |
         */

        boxShadow: {
            default: '0 2px 4px 0 rgba(0,0,0,0.10)',
            md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
            lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
            inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
            outline: '0 0 0 3px rgba(52,144,220,0.5)',
            none: 'none',
        },


        /*
         |-----------------------------------------------------------------------------
         | Z-index                                https://tailwindcss.com/docs/z-index
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your z-index utility values. By default we
         | provide a sensible numeric scale. You can, of course, modify these
         | values as needed.
         |
         | Class name: .z-{index}
         |
         */

        zIndex: {
            auto: 'auto',
            0: 0,
            1: 1,
            10: 10,
            20: 20,
            30: 30,
            40: 40,
            50: 50,
        },


        /*
         |-----------------------------------------------------------------------------
         | Opacity                                https://tailwindcss.com/docs/opacity
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your opacity utility values. By default we
         | provide a sensible numeric scale. You can, of course, modify these
         | values as needed.
         |
         | Class name: .opacity-{name}
         |
         */

        opacity: {
            0: '0',
            25: '.25',
            50: '.5',
            75: '.75',
            100: '1',
        },


        /*
         |-----------------------------------------------------------------------------
         | SVG fill                                   https://tailwindcss.com/docs/svg
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your SVG fill colors. By default we just provide
         | `fill-current` which sets the fill to the current text color. This lets you
         | specify a fill color using existing text color utilities and helps keep the
         | generated CSS file size down.
         |
         | Class name: .fill-{name}
         |
         */

        fill: {
            current: 'currentColor',
        },


        /*
         |-----------------------------------------------------------------------------
         | SVG stroke                                 https://tailwindcss.com/docs/svg
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your SVG stroke colors. By default we just provide
         | `stroke-current` which sets the stroke to the current text color. This lets
         | you specify a stroke color using existing text color utilities and helps
         | keep the generated CSS file size down.
         |
         | Class name: .stroke-{name}
         |
         */

        stroke: {
            current: 'currentColor',
        },

        container: {
            center: true,
            padding: '1rem',
        }
    },
    variants: {
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColor: [
            'responsive',
            'hover',
            'focus',
        ],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: [],
        borderColor: [
            'responsive',
            'hover',
            'focus',
        ],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive'],
        cursor: ['responsive'],
        display: ['responsive'],
        flexDirection: ['responsive'],
        flexWrap: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        justifyContent: ['responsive'],
        alignContent: ['responsive'],
        flex: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        float: ['responsive'],
        fontFamily: ['responsive'],
        fontWeight: [
            'responsive',
            'hover',
            'focus',
        ],
        height: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: ['responsive'],
        listStyleType: ['responsive'],
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        opacity: ['responsive'],
        outline: ['focus'],
        overflow: ['responsive'],
        padding: ['responsive'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        inset: ['responsive'],
        resize: ['responsive'],
        boxShadow: [
            'responsive',
            'hover',
            'focus',
        ],
        fill: [],
        stroke: [],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColor: [
            'responsive',
            'hover',
            'focus',
        ],
        fontSize: ['responsive'],
        fontStyle: [
            'responsive',
            'hover',
            'focus'
        ],
        fontSmoothing: [
            'responsive',
            'hover',
            'focus'
        ],
        textDecoration: [
            'responsive',
            'hover',
            'focus'
        ],
        textTransform: [
            'responsive',
            'hover',
            'focus'
        ],
        letterSpacing: ['responsive'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive'],
        whitespace: ['responsive'],
        wordBreak: ['responsive'],
        width: ['responsive'],
        zIndex: ['responsive'],
    }, /*
     |-----------------------------------------------------------------------------
     | Plugins                                https://tailwindcss.com/docs/plugins
     |-----------------------------------------------------------------------------
     |
     | Here is where you can register any plugins you'd like to use in your
     | project. Tailwind's built-in `container` plugin is enabled by default to
     | give you a Bootstrap-style responsive container component out of the box.
     |
     | Be sure to view the complete plugin documentation to learn more about how
     | the plugin system works.
     |
     */

    plugins: [],
}
