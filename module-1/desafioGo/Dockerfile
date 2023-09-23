
from golang:alpine as builder

workdir src/app

copy ./main.go .

run go mod init fullCycle

run go build

from scratch

copy --from=builder go/src/app/fullCycle .

CMD ["./fullCycle"]