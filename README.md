# React APPlication Architecture 
  ##  src/pages 
    - Collection of Differnet componentes for a url 
  ##  src/components
    - Common elements/ designs repeate 

# React-Reconcilation
  - Virtual DOM 

  - Mounting
  - Updating 
  - Unmounting 

# Atomic Design pattern 
  - Atom + Atom => Molecule + Molecule => Organism + Organism => Template + Template => Page

## Data Control 
  - state 
  - props 
    - props-drilling 

## Web Hook 
  - state 
  - Effect 


## Facebook => user profile => https://facebook.com/username  -> path param 
## Detail(id or slug), Form Detail, preview page 

## search, pagination, optional 
## https://www.youtube.com/watch/?v=videoId&t=1000
## https://youtu.be/videoid


## 
  ```
    /node_modules
    /public
    /src
      /pages
        /<Module>
        /error
        /layouts
          ...
      /components
        /feature
        /ui
        /common
        ...
      /context
        /providers
        /hooks
        ...
      /stores
        /reducers
        ...main
      /lib
        /types
        /config
        /dto
        /rules
        /services
      /router
        mainrouter

  ```