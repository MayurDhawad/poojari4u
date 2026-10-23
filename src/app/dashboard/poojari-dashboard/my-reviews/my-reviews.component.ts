import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Review {
  id: number;
  devoteeName: string;
  serviceName: string;
  rating: number; // 1 to 5
  comment: string;
  date: string;
  location: string;
  response?: string;
}

@Component({
  selector: 'app-my-reviews',
  standalone: true,
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class MyReviewsComponent {

 reviews = signal<Review[]>([
    {
      id: 1,
      devoteeName: 'Rajesh Kumar',
      serviceName: 'Satyanarayan Puja',
      rating: 5,
      comment: 'Panditji explained all the rituals with deep meaning. The puja was conducted very peacefully and on time. Highly recommended!',
      date: '18 Oct 2026',
      location: 'Nagpur',
      response: 'Thank you Rajesh ji. May Bhagwan Vishnu bless your home with prosperity.'
    },
    {
      id: 2,
      devoteeName: 'Sunita Joshi',
      serviceName: 'Griha Pravesh Puja',
      rating: 5,
      comment: 'Very punctual and well-prepared with all puja samagri requirements shared in advance. Excellent guidance throughout.',
      date: '12 Oct 2026',
      location: 'Nagpur'
    },
    {
      id: 3,
      devoteeName: 'Amit Deshmukh',
      serviceName: 'Maha Mrunjay Jaap',
      rating: 4,
      comment: 'Calm and divine atmosphere created during the chanting. Very satisfied with the service.',
      date: '05 Oct 2026',
      location: 'Wardha'
    }
  ]);

  filterRating = signal<number | 'all'>('all');
  
  // Modal state for replying to reviews
  selectedReview = signal<Review | null>(null);
  replyText = signal<string>('');

  // Computed average rating & total reviews
  averageRating = computed(() => {
    const list = this.reviews();
    if (list.length === 0) return 0;
    const sum = list.reduce((acc, r) => acc + r.rating, 0);
    return (sum / list.length).toFixed(1);
  });

  filteredReviews = computed(() => {
    const filter = this.filterRating();
    const list = this.reviews();
    if (filter === 'all') return list;
    return list.filter(r => r.rating === filter);
  });

  setFilter(rating: number | 'all') {
    this.filterRating.set(rating);
  }

  openReplyModal(review: Review) {
    this.selectedReview.set(review);
    this.replyText.set(review.response || '');
  }

  closeReplyModal() {
    this.selectedReview.set(null);
    this.replyText.set('');
  }

  submitReply() {
    const review = this.selectedReview();
    if (!review) return;

    const text = this.replyText();
    this.reviews.update(list =>
      list.map(r => r.id === review.id ? { ...r, response: text } : r)
    );
    this.closeReplyModal();
  }
}