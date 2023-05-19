import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Oceans from "./Oceans/Oceans";

import PetTabs from "./PetTabs/PetTabs";
import WildKingDom from "./WildKingDom/WildKingDom";


const TabSubCategory = () => {
    return (
        <div>
            <Tabs className='rounded-3xl md:p-10  mx-auto'>
                    <TabList>
                        <Tab>Ocean Explorers </Tab>
                        <Tab>Pet Pals </Tab>
                        <Tab>Wild Kingdom</Tab>
                    </TabList>
              

                    <TabPanel>
                        <div className="md:p-20 mx-auto rounded-3xl">
                            <Oceans></Oceans>
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className="md:p-20 rounded-3xl">
                            <PetTabs></PetTabs>
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className="md:p-20 rounded-3xl">
                            <WildKingDom></WildKingDom>
                      
                        </div>
                    </TabPanel>
       

            </Tabs>

        </div>
    );
};

export default TabSubCategory;