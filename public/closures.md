# Closures no React 

No React quando chamamos uma função não adianta repetir essa chamada 

```js
  function Comment(props){
    const [likes, setLikes] = 0

    function addLike(){
      setLikes(likes + 1)
      setLikes(likes + 1)
    }
  }
Comment(props, 1)
Comment(props, 2)

```

nesse exemplo o valor de likes sera sempre equivalente ao valor antigo 
o que caso precise do valor anterior seria mais interessante fazer assim:

```js
  function Comment(props){
    const [likes, setLikes] = 0

    function addLike(){
      setLikes((state) =>{ 
        return likes + 1
      })
      setLikes((state) =>{ 
        return likes + 1
      })
    }
  }
Comment(props, 1)
Comment(props, 2)

```