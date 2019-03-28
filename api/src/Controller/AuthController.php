<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AuthController extends AbstractController
{
    public function register(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $em = $this->getDoctrine()->getManager();

        $username = $request->request->get('_username');
        $password = $request->request->get('_password');
        $email = $request->request->get('_email');
        $role = $request->request->get('_role');

        $user = new User($username);
        $user->setPassword($encoder->encodePassword($user, $password));
        $user->setRoles([$role]);
        $user->setEmail($email);

        $em->persist($user);
        $em->flush();
        return new Response(sprintf('User %s successfully created', $user->getUsername()));
    }
    public function api()
    {
        return new Response(json_encode(['auth' => true]));
    }
    public function session(){
        return new Response(json_encode([
            'username' => $this->getUser()->getUsername(),
            'avatar' => $this->getUser()->getAvatar()->getContentUrl(),
        ]));
    }
}
