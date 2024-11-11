import { Observable } from '@nativescript/core';
import { Localize } from '@nativescript/localize';

export class MainViewModel extends Observable {
    private _selectedTabIndex: number;
    private _currentLanguage: string;

    constructor() {
        super();
        this._selectedTabIndex = 0;
        this._currentLanguage = Localize.getLanguage();
    }

    get selectedTabIndex(): number {
        return this._selectedTabIndex;
    }

    set selectedTabIndex(value: number) {
        if (this._selectedTabIndex !== value) {
            this._selectedTabIndex = value;
            this.notifyPropertyChange('selectedTabIndex', value);
        }
    }

    get currentLanguage(): string {
        return this._currentLanguage;
    }

    switchToEnglish() {
        Localize.setLanguage('en');
        this._currentLanguage = 'en';
        this.notifyPropertyChange('currentLanguage', 'en');
    }

    switchToArabic() {
        Localize.setLanguage('ar');
        this._currentLanguage = 'ar';
        this.notifyPropertyChange('currentLanguage', 'ar');
    }
}