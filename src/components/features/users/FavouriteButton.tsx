import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FavouriteButton({ isStarred = false, onClick = () =>{} }) {
    return (
    <Button variant={'outline'} size='icon' onClick={onClick} >
      <Star className={`h-4 w-4 ${ isStarred && "text-yellow-400  fill-yellow-400" }`}/>
    </Button>
  );
}
