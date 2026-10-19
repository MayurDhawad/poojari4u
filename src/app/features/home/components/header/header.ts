import { Component, signal } from '@angular/core';
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

  mobileMenuOpen = signal(false);
  cartCount = 0;

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
    const dialogRef = this.dialog.open(LoginComponent, {
      // maxWidth: '40vw',
      // maxHeight: '80vh',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.closeMobileMenu();
        if(res == 'poojari-register'){
          this.router.navigate(['/poojari-registration']);
        }else if(res == 'bajanthri-register'){
          this.router.navigate(['/bajanthri-registration']);
        }else if(res == 'poojari-login'){
          this.router.navigateByUrl('/poojari-dashboard/my-dashboard')
        }else if(res == 'bajanthri-login'){
          this.router.navigateByUrl('/bajanthris-dashboard')
        }else{
          this.router.navigate(['/']);
        }
      }else{
        if(res == 'poojari-register'){
          this.router.navigate(['/poojari-registration']);
        }else if(res == 'bajanthri-register'){
          this.router.navigate(['/bajanthri-registration']);
        }else if(res == 'poojari-login'){
          this.router.navigateByUrl('/poojari-dashboard/my-dashboard')
        }else if(res == 'bajanthri-login'){
          this.router.navigateByUrl('/bajanthris-dashboard')
        }else{
          this.router.navigate(['/']);
        }
      }
    });
  }

  onCartClick(): void {
    this.closeMobileMenu();
    this.router.navigate(['/cart']);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

}