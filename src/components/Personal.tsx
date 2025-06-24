

interface PersonalProps {
  firstName: string
  isLoading?: boolean,
  age:  number,
  isMale: boolean,
  colors: string[],
  user: {
    firstName: string
  },
  onClick: () => void,
  title: string, 
  status: string, 
  children: React.ReactNode,
  component1: React.ElementType,
  component2: React.ReactNode
}

function Personal({ 
  firstName, 
  isLoading = false,
  title: todoTitle, 
  status, 
  children,
  component1: Component1,
  component2,
  ...restProps 
}: PersonalProps) {
  console.log('Personal: ', {
    firstName,
    isLoading,
    restProps,
    todoTitle, 
    status,
    // nameBird: restProps['name-bird']
  });

  return (
    <div>
      Personal <br />
      Children: {children} <br />
      Component 1: <Component1 /> <br />
      Component 2: {component2}
    </div>
  )
}

export default Personal