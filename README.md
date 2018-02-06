# binary-search

1. Set starting poin(start) mulai dari index ke-0
2. Ending poin(end) merupakan index terakhir (array.length-1)
3. Cari nilai tengahnya(mid) dengan menjumlah end dan start kemudian dibagi dengan 2
4. Looping array selama nilai end lebih kecil dari nilai start atau sama dengan nol
      Nilai mid = jumlah start dan end dibagi 2
   5. Jika array index ke-mid sama dengan search
        return nilai mid
      Jika nilai search lebih besar dari nilai array index ke-mid
        ubah start menjadi index setelah mid(mid+1) // ambil nilai array mulai dari mid+1 sampai akhir
      Jika nilai search lebih kecil dari nilai array index ke-mid
        ubah end menjadi index sebelum mid (mid-1) // ambil nilai array mulai dari awal (0) sampai mid-1
   End loop
6. Jika search tidak ditemukan return -1