import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { PostComponent } from './components/post/post.component';
import { InternComponent } from './components/intern/intern.component';
import { PostContentComponent } from './components/post-content/post-content.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { InteractionBarComponent } from './components/interactionBar/interaction-bar.component';
import { SharedModule } from '../shared/shared.module';
import { PostHeaderComponent } from './components/post-header/post-header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [Tab1Page, PostComponent, InternComponent, PostContentComponent, PostListComponent, InteractionBarComponent, PostHeaderComponent]
})
export class Tab1PageModule {}
