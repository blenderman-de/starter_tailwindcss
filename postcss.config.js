
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');


const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

const plugins = [];
//plugins.push(tailwindcss)

plugins.push(autoprefixer)
plugins.push(tailwindcss('tailwind.config.js')) 

// This is if you want to include your custom config 

if (!IS_DEVELOPMENT) {
    const purgecss = require('@fullhuman/postcss-purgecss');
    
    const TailwindExtractor = content => {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
      };
    
    plugins.push(
        purgecss({
            content: ['src/*.html','src/content/*.html'],
            extractors: [
                {
                    extractor: TailwindExtractor,
                    extensions: ['html']
                }
            ],
        })
    );
}

module.exports = { plugins }