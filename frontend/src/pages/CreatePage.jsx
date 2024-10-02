import { Button, Input } from '@chakra-ui/react';

const CreatePage = () => {
  return (
    <div>
         <Input placeholder="Product Name" />
      <Input placeholder="Product Price" />
      <Button colorScheme="teal" mt={4}>
        Create Product
      </Button>
    </div>
  )
}

export default CreatePage
