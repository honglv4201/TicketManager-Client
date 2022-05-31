{
    idUser,
    idTrip,
    [
        {
            idWagon,
            seatNumber,
            hoten ,
            gplx, 

        }
    ],
    paymentType ... (tienmawt, the,...),
    isPay 
}

-> insert 
* Invoice (idUser, idTrip)
* [ 
    Seat (idWagon , seatNumber,...),...
    CusSeat(idSeat, hoten, gplx)
]