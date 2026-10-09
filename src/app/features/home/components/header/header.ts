import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive} from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { PoojariProfileCardComponent } from '../../pages/poojaris/profile-card/poojari-profile-card.component';
import { LoginComponent } from '../../../auth/login/login.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(
    public dialog: MatDialog,
    private router: Router
  ){}

  navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Poojaris', path: '/poojaris' },
    { label: 'Bajanthri', path: '/bajanthri' },
    { label: 'Pooja Samagri', path: '/pooja-samagri' },
    { label: 'Packages', path: '/packages' },
  ];

  onRegistration(){
    // this.router.navigateByUrl('/login')
    const dialogRef = this.dialog.open(LoginComponent, {
      maxWidth: '40vw',
      maxHeight: '80vh',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        console.log('result:', res);
        if(res == 'poojari'){
          this.router.navigate(['/poojari-registration']);
        }else if(res == 'bajanthri'){
          this.router.navigate(['/bajanthri-registration']);
        }else{
          this.router.navigate(['/']);
        }
      }
    });
  }

}