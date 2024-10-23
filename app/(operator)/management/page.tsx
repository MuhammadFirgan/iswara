import CreateUserForm from "@/components/shared/CreateUserForm"
import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  

export default function page() {



  return (
    <section className="px-10">
      <CreateUserForm />
      <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
              <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
              <TableRow>
              <TableCell className="line-clamp-1">Muhammad Firgani Rahman</TableCell>
              <TableCell>Operator</TableCell>
              <TableCell className="flex gap-2 justify-end">
                <Badge variant="destructive">Hapus</Badge>
                <Badge variant="warning">Ubah</Badge>

              </TableCell>
              </TableRow>
          </TableBody>
      </Table>

    </section>
  )
}
