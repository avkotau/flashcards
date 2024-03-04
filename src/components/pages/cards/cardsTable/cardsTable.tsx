import { Table, Typography } from '@/components'

export const CardsTable = () => {
  return (
    <Table.Root>
      <Table.Head />
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Typography.Body2>1</Typography.Body2>
          </Table.Cell>
          <Table.Cell>
            <Typography.Body2>2</Typography.Body2>
          </Table.Cell>
          <Table.Cell>
            <Typography.Body2>3</Typography.Body2>
          </Table.Cell>
          <Table.Cell>
            <Typography.Body2>4</Typography.Body2>
          </Table.Cell>
          <Table.Cell>
            <Typography.Body2>5</Typography.Body2>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}
