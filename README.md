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

## Cookies, LocalStorage and SessionStorage, 
- Dependent on Domain 
- Key-value pair name => value
- Only string 

### Cookies 
  - For a limited period of time for a domain or a path => via subdomain
    - if time is not specified ===> Session 
  - Upon maturatiy, cookie gets self-destroyed 
  - A domain can have max of about 50 
  - each cookie can have max of 4086 characters 
  - Cookie is kind of a secure 
  - Cookie is passed to every http request

  ```js
    document.cookies = "name=value; expires=ISODate; path=/admin; "
    document.cookies = "name1=value; expires=ISODate; path=/admin; "
    const str = document.cookies    // "name=value; name1=value; "
  ```
### LocalStorage 
  - Key-value pair
  - stored unless your clear it 
  - 5~10mb data 
  - domain dependent
### SessionStorage 
  - Destroy upon browser/tab close 
  - Set only for a tab


### Context 
- Context => create 
- Provider => provide to component 
- Consume => using hook to read from context

g a u g
0 6 5 5

5 => wrx
7 => dwrx