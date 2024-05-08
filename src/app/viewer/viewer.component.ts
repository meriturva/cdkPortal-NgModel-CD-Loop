import { ChangeDetectionStrategy, Component, ComponentRef, input } from '@angular/core';
import { CdkPortalOutlet, CdkPortalOutletAttachedRef, ComponentPortal } from '@angular/cdk/portal';
import { TextEditorComponent } from '../text-editor/text-editor.component';

@Component({
  selector: 'app-viewer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CdkPortalOutlet],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent {
  public readonly properties = input.required<{ name: string, type: string, value: string }[] | null>();

  protected getComponentPortal(property: any): ComponentPortal<unknown> | undefined {
    console.log("getComponentPortal", property)
    const portalComponent = new ComponentPortal(TextEditorComponent!);
    return portalComponent;
  }

  protected onAttached(property: any, cdkPortalOutletAttachedRef: CdkPortalOutletAttachedRef): void {
    const componentRef = cdkPortalOutletAttachedRef as ComponentRef<unknown>;
    console.log('Attached editor ', componentRef, 'for property ', property);
    componentRef.setInput('value', property.value);
  }
}
