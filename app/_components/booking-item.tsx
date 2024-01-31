"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";


const BookingItem = () => {
  return ( 
    <Card>
      <CardContent>
        <div>
          <Badge>Confirmado</Badge>
        </div>
      </CardContent>
    </Card>
   );
}
 
export default BookingItem;