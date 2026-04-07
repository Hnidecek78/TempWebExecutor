import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommandExecutorComponent } from './command-executor/command-executor.component';
import { CommandExecutorService } from './command-executor.service';

@NgModule({
  declarations: [
    AppComponent,
    CommandExecutorComponent, // <-- Make sure this is here
  ],
  imports: [
    BrowserModule,
  ],
  providers: [CommandExecutorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
