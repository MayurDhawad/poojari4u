import { afterNextRender, Component, ElementRef, signal, viewChild } from '@angular/core';
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
  audioRef = viewChild<ElementRef<HTMLAudioElement>>('bgAudio');
  isPlaying = false;

  constructor(
    public dialog: MatDialog,
    private router: Router
  ){
    afterNextRender(() => {
      const audio = this.audioRef()?.nativeElement;
      if (audio) {
        audio.play().then(() => {
          this.isPlaying = true;
        }).catch(() => {
          // Browser blocked autoplay; user can click to play
          this.isPlaying = false;
        });
      }
    });
  }

  navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Poojaris', path: '/poojaris' },
    { label: 'Bajanthri', path: '/bajanthri' },
    { label: 'Pooja Samagri', path: '/pooja-samagri' },
    { label: 'Packages', path: '/packages' },
  ];

  toggleAudio() {
    const audio = this.audioRef()?.nativeElement;
    if (!audio) return;

    if (this.isPlaying) {
      audio.pause();
      this.isPlaying = false;
    } else {
      audio.play().then(() => {
        this.isPlaying = true;
      });
    }
  }

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
        }else if(res == 'admin-login'){
          this.router.navigateByUrl('/dashboard')
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
          this.router.navigateByUrl('/bajanthris-dashboard/my-dashboard')
        }else if(res == 'admin-login'){
          this.router.navigateByUrl('/dashboard')
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