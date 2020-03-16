import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
})
export class MovieEditComponent implements OnInit {
  movie: IMovie
  movieId: number
  movieGenres: string[]
  movieEditForm
  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService, private formBuilder:FormBuilder, private datepipe:DatePipe, private router:Router) { }

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.params['id'] as number
    this.movie = this.movieService.getMovie(this.movieId)
    this.movieGenres = this.movieService.getGenres()
    console.log(this.movie)
    this.movieEditForm = this.formBuilder.group({
      title:[this.movie.title,[Validators.required, Validators.maxLength(200)]],
      boxOffice:[this.movie.boxOffice,Validators.required],
      dateOfLaunch:[this.datepipe.transform(this.movie.dateOfLaunch,'yyyy-MM-dd'),Validators.required],
      genre:[this.movie.genre,Validators.required],
      active:[this.movie.active],
      hasTeaser:[this.movie.hasTeaser]
    })
    console.log(this.movieEditForm)
  }

  updateMovie()
  {
    this.movie.title = this.movieEditForm.value['title']
    this.movie.boxOffice = this.movieEditForm.value['boxOffice']
    this.movie.dateOfLaunch = this.movieEditForm.value['dateOfLaunch']
    this.movie.genre = this.movieEditForm.value['genre']
    this.movie.active = this.movieEditForm.value['active']
    this.movie.hasTeaser = this.movieEditForm.value['hasTeaser']
    console.log(this.movie)
    this.movieService.updateMovie(this.movie)
    if(confirm('Movie Details saved successfully. Click OK to return to Movie List'))
    {
      this.router.navigateByUrl('/movies')
    }
  }
}
