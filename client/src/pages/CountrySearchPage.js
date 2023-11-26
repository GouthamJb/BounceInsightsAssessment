import React, { useEffect } from 'react';
import jsonData from '../sample.json';
import '../styles/CountrySearchPage.css'
import NameComponent from '../components/NameComponent';
import TLDComponent from '../components/TopLevelDomainComponents';
import CountryCodeComponent from '../components/CountryCodeComponent';
import CountryStatusComponent from '../components/CountryStatusComponent';
import CurrenciesComponent from '../components/CurrenciesComponent';
import IDDComponent from '../components/IDDComponent';
import CapitalComponent from '../components/CapitalComponent';
import AltSpellingComponent from '../components/AltSpellingsComponent';
import GeographyComponent from '../components/GeographyComponent';
import LanguagesComponent from '../components/LanguagesComponent';
import TranslationsComponent from '../components/TranslationsComponent';
import DemonymsComponent from '../components/DemonymsComponent';
import NationalInsigniaComponent from '../components/NationalInsigniaComponent';
import OtherInfoComponent from '../components/OtherInfoComponent';
import SearchComponent from '../components/SearchComponent';
const CountrySearchPage = () => {
    useEffect(() => {
        console.log(jsonData)
        for (var country of jsonData) {
            for (var key in country) {
                console.log(key)
            }
        }
    });
    return (
        <div className='main-container'>
            <div className='search-container'>
                <SearchComponent></SearchComponent>
            </div>
            <div className='information-container'>
                <NameComponent data={jsonData[0].name}></NameComponent>
                <TLDComponent data={jsonData[0].tld}></TLDComponent>
                <CountryCodeComponent  data={jsonData[0]}></CountryCodeComponent>
                <CountryStatusComponent data={jsonData[0]}></CountryStatusComponent>
                <CurrenciesComponent data={jsonData[0].currencies}></CurrenciesComponent>
                <IDDComponent data={jsonData[0].idd}></IDDComponent>
                <CapitalComponent data={jsonData[0]}></CapitalComponent>
                <AltSpellingComponent data={jsonData[0].altSpellings}></AltSpellingComponent>
                <GeographyComponent data={jsonData[0]}></GeographyComponent>
                <LanguagesComponent data={jsonData[0].languages}></LanguagesComponent>
                <TranslationsComponent data={jsonData[0].translations}></TranslationsComponent>
                <DemonymsComponent data={jsonData[0].demonyms}></DemonymsComponent>
                <NationalInsigniaComponent data={jsonData[0]}></NationalInsigniaComponent>
                <OtherInfoComponent data={jsonData[0]}></OtherInfoComponent>
            </div>
        </div>
    );
}

export default CountrySearchPage;