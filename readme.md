Ready-to-use starter project for [TailwindCSS](https://tailwindcss.com/) and [Parcel](https://parceljs.org/) bundler. You can find demonstration of the build result [here](https://blenderman-de.github.io/starter_tailwindcss/).


## Install 

Install NodeJS (under v15 [because it uses deasync](https://github.com/parcel-bundler/parcel/issues/5294))

    choco install nodejs-lts -y

Install dependencies from `package.json`.

    npm install 

## Usage

run dev server or build your project to `dist`

    npm run dev 
    npm run build 


change repro version in `package.json` and commit version tag 

    npm version major
    npm version minor
    npm version patch 

 
Windows CMD only: Create named release in `release` folder. 

    npm run release 

## Awesome TailwindCSS 

- https://mertjf.github.io/tailblocks/ 
- https://medium.com/@adisk/how-to-setup-tailwind-css-with-parcel-bundler-f76e4aac5f16
- https://github.com/aniftyco/awesome-tailwindcss


